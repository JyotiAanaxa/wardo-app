import { filterObjArr, filterObjArrWithLetter, filterPropertyNotEmpty } from "../../utils/app-util";

const ALPHABET_ARRAY = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export const BrandData = (brandData) => {
    let sectionDataList = [];
    ALPHABET_ARRAY.forEach(element => {
        const data = filterObjArrWithLetter(filterObjArr(brandData, 'name'), element);
        if (data && data.length) {
            sectionDataList.push({
                title: element,
                data,
            });
        }
    });
    return sectionDataList;
};