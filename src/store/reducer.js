import {ActionType} from './action';

const initialState = {
  photo: 1,
  currentSection: `features`,
  reviews: [
    {
      author: `Борис Иванов`,
      dignity: `мощность, внешний вид`,
      limitations: `Слабые тормозные колодки (пришлось заменить)`,
      comment: `Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. 
      Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.`,
      rating: 3
    },
    {
      author: `Марсель Исмагилов`,
      dignity: `Cтиль, комфорт, управляемость`,
      limitations: `Дорогой ремонт и обслуживание`,
      comment: `Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. 
      Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. 
      Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.`,
      rating: 3
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_PHOTO:
      return {
        ...state,
        photo: action.payload
      };
    case ActionType.CHANGE_SECTION:
      return {
        ...state,
        currentSection: action.payload
    };
    case ActionType.ADD_NEW_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload]
    };
    default:
      return state;
  }
};


export {reducer};