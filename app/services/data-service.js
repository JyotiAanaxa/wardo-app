import Api from '../utils/api';
import { map } from 'rxjs/operators';
import axios from 'axios';
import { AppConstants } from '../utils/app-constants';
import AuthService from './auth';

const PAGE_SIZE = 50;
const DataService = {

  getFilteredExpertList(page, name, categories, priceRange) {
    const dto = {
      page,
      size: 20,
      filterModel: {
        'stylistInfo.userCategory': {
          values: categories,
          filterType: 'set',
        },
        'package.cost': {
          filterType: 'number',
          filter: priceRange[0],
          filterTo: priceRange[1],
          type: 'inRange',
        },
        _: {
          filter: name,
          filterType: 'text',
        },
      },
    };
    return Api.post('/stylist', dto).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  getExpertList(page, key, priceRange, entity) {
    const dto = {
      page,
      size: 20,
      filterModel: {
        'stylistInfo.userCategory': {
          values: entity === AppConstants.ENTITY.CATEGORY ? [key] : [],
          filterType: 'set',
        },
        'package.selectedPackage': {
          values: entity === AppConstants.ENTITY.SERVICES ? [key] : [],
          filterType: 'set',
        },
        'package.cost': {
          filterType: 'number',
          filter: priceRange[0],
          filterTo: priceRange[1],
          type: 'inRange',
        },
      },
    };
    return Api.post('/stylist', dto).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  getStylistMasterData() {
    const dto = {
      page: 0,
      size: 50,
      filterModel: {},
    };
    return Api.get('/stylist/master-data', dto).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  hierarchicalCategories() {
    return Api.get('/category/all/hierarchy').pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  hierarchicalCategories() {
    return Api.get('/category/all/hierarchy').pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  updateMyHierachicalCategory(parentCategoryName, body) {
    return Api.put(
      `/category/my/hierarchy?parentCategoryName=${parentCategoryName}`,
      body,
    ).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  getChildCategories(page, parentCategoryName) {
    return Api.get(
      `/category/children?page=${page}&parentCategoryName=${parentCategoryName}&size=${PAGE_SIZE}`,
    ).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  removeBg(data) {
    return Api.post('/file/upload/no-bg', data).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  brandData(query, cancelReq) {
    return Api.get(`/brand/autocomplete/${query}`, cancelReq).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  addBrand(data) {
    return Api.post('/brand', data).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  addItem(data) {
    return Api.post('/item', data).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  updateItemProps(key, data) {
    return Api.put(`/item?propChanged=${key}`, data).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  myHierarchicalItem(userSlug) {
    return Api.get('/category/my/hierarchy', { params: { userSlug } }).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  myItemCount() {
    return Api.get('/item/my/count').pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  myItems(categoryName, page, userSlug) {
    return Api.get('/item/my', {
      params: {
        categoryName,
        size: PAGE_SIZE,
        page,
        userSlug,
      },
    }).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  deleteItem(data) {
    return Api.post('/item/delete', data).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  async uploadImageFile(response) {
    const form = new FormData();
    form.append('file', {
      uri: `${response.uri}`,
      type: `${response.type}`,
      name: `${response.fileName ? response.fileName : response.name}`,
    });
    return axios({
      url: AppConstants.baseURL + '/file/upload',
      method: 'POST',
      data: form,
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-AUTH-TOKEN': await AuthService.getToken(),
      },
    })
      .then(response => {
        return response.data.data;
      })
      .catch(error => {
      });
  },

  getLookBookCategories() {
    return Api.get('lookbook/all').pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  getLookBookCategoriesByStatus(userSlug) {
    return Api.get('lookbook/my/hierarchy', { params: { userSlug } }).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  getAllLooksByLookBookName(page, lookbookName, userSlug) {
    const dto = {
      page,
      size: 50,
      filterModel: {
        lookbookName: {
          values: [lookbookName],
          filterType: 'set',
        },

        ...(userSlug && {
          userSlug: { filterType: 'exact', filter: userSlug },
        }),
      },
    };

    return Api.post('/look/search', dto).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  saveLookWithTodayFlag(data, saveAsTodaysLook = false, userSlug) {
    return Api.post('/look/add', data, {
      params: { saveAsTodaysLook, userSlug },
    }).pipe(
      map(response => {
        const data = response.data;
        return data;
      }),
    );
  },

  updateLook(dto) {
    return Api.put('/look/update', dto).pipe(
      map(response => {
        const data = response.data;
        return data;
      }),
    );
  },

  deleteLook(id) {
    return Api.post('/look/delete', [id]).pipe(
      map(response => {
        const data = response.data;
        return data;
      }),
    );
  },

  getTodayLook() {
    return Api.get('/look/today').pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  updateTodaysLook(lookSlug) {
    return Api.put(`/look/today?lookSlug=${lookSlug}`).pipe(
      map(response => {
        const data = response.data;
        return data;
      }),
    );
  },

  createShoppingList(name, userSlug = '') {
    return Api.post('/shopping-list', { name, userSlug }).pipe(
      map(response => {
        const data = response.data;
        return data;
      }),
    );
  },

  addMultipleItemsToShoppingList(items = [], shoppingListSlug) {
    return Api.post('/shopping-list-item/bulk', items, {
      params: { shoppingListSlug },
    }).pipe(
      map(response => {
        const data = response.data;
        return data;
      }),
    );
  },

  getMyShoppingLists(userSlug) {
    const page = {
      page: 0,
      size: 50,
    };

    return Api.get('/shopping-list/with-count', {
      params: { ...page, userSlug },
    }).pipe(
      map(response => {
        const data = response.data;
        return data;
      }),
    );
  },

  getShoppingListBySlug(shoppingListSlug = '') {
    return Api.get(`/shopping-list/${shoppingListSlug}`).pipe(
      map(response => {
        const data = response.data;
        return data;
      }),
    );
  },

  deleteShoppingList(id) {
    return Api.post('/shopping-list/delete', [id]).pipe(
      map(response => {
        const data = response.data;
        return data;
      }),
    );
  },

  getShoppingListItemsByListSlug(shoppingListSlug = '') {
    return Api.get('/shopping-list-item/shopping-list', {
      params: { shoppingListSlug },
    }).pipe(
      map(response => {
        const data = response.data;
        return data;
      }),
    );
  },

  deleteShoppingListItem(id) {
    return Api.post('/shopping-list-item/delete', [id]).pipe(
      map(response => {
        const data = response.data;
        return data;
      }),
    );
  },

  getMyClients() {
    const page = {
      page: 0,
      size: 50,
    };

    return Api.get('/client', {
      params: { ...page },
    }).pipe(
      map(response => {
        const data = response.data;
        return data;
      }),
    );
  },

  getClientsCount() {
    return Api.get('/client/count').pipe(
      map(response => {
        const data = response.data;
        return data;
      }),
    );
  },

  findClientByInviteCode(inviteCode) {
    return Api.post(
      '/client/search/invite-code',
      {},
      { params: { inviteCode } },
    ).pipe(
      map(response => {
        const data = response.data;
        return data;
      }),
    );
  },

  connectWithClient(inviteCode) {
    return Api.post('/client/connect', {}, { params: { inviteCode } }).pipe(
      map(response => {
        const data = response.data;
        return data;
      }),
    );
  },

  getPackageTemplateBySpeciality(speciality) {
    return Api.get(
      '/package-template/speciality',
      {params: {speciality}}
    ).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  savePackage(data) {
    return Api.post('/stylist-package', data).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  getPackageServiceStats(userSlug) {
    return Api.get(`/stylist-package/service/stats?userSlug=${userSlug}`).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  getPackageDetails(speciality, selectedPackage, userSlug) {
    return Api.get(
      `/stylist-package/package/details?selectedPackage=${selectedPackage}&speciality=${speciality}&userSlug=${userSlug}`,
    ).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  getPackageStats(speciality, userSlug) {
    return Api.get(
      `/stylist-package/package/stats?speciality=${speciality}&userSlug=${userSlug}`,
    ).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  getConsumerData(slug) {
    return Api.get(`/consumer/${slug}`).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },

  onRemoveClient(slug) {
    return Api.post(`/client/remove?clientSlug=${slug}`).pipe(
      map(response => {
        const data = response.data.data;
        return data;
      }),
    );
  },
};

export default DataService;
