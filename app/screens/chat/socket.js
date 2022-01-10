import {useState} from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import AuthService from '../../utils/services/auth-service';

let stompClient;

const useSocket = () => {
  const user = AuthService.getUser();
  const [messageHistory, setMessageHistory] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [session, setSession] = useState({});
  const [isMsgLoaded, setIsMsgLoaded] = useState(false);

  const startSession = sessionSlug => {
    var sock = new SockJS(`${process.env.REACT_APP_API_HOST}ws`);
    stompClient = Stomp.over(sock);
    sock.onopen = function() {};
    let header = {
      'X-AUTH-TOKEN': AuthService.getToken(),
    };

    stompClient.connect(header, function(frame) {
      setIsConnected(true);
      stompClient.subscribe(
        `/app/topic/messages/${sessionSlug}`,
        function(msg) {
          const msgBody = JSON.parse(msg.body) || {};
          const newMessage = msgBody.slug ? msgBody : msgBody.content;
          if (newMessage) {
            setIsMsgLoaded(true);
            setMessageHistory(prev => prev.concat(newMessage));
          }
        },
        {id: sessionSlug},
      );
    });
  };

  const unsubscribe = val => {
    stompClient.unsubscribe(val);
    setIsMsgLoaded(false);
  };

  const sendMessage = val => {
    stompClient.send(
      `/app/chat/${session.slug}`,
      {},
      JSON.stringify({
        fromUserSlug: user.slug,
        text: val['msg'],
        attachmentUrl: val['imgUrl'],
        chatSessionSlug: session.slug,
      }),
    );
  };

  return {
    startSession,
    isConnected,
    messageHistory,
    setMessageHistory,
    sendMessage,
    unsubscribe,
    setSession,
    isMsgLoaded,
  };
};

export default useSocket;
