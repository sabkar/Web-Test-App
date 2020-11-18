import { getLocalStorage, setLocalStorage } from './storage.js';
import cookieParser from './cookie.js'
import { getSession, setSession } from './session.js'

const User = {
  // имя пользователя
  nameData: getSession('name'),
  // группа пользователя
  groupData: getSession('group'),

  // геттеры
  get name() { return this.nameData },
  get group() { return this.groupData }, 

  // сеттеры
  set name(title) {
    // ставим в куки
    setSession("name", title);
    this.nameData = title;
  },

  set group(title) {
    // ставим в куки
    setSession("group", title);
    this.groupData = title;
  },

  // переводит в строку
  toString() {
    return this.name + " - " + this.group;
  },
  // проверяет авторизацию
  isAutorized() { 
    return this.name && this.group;
  },

  loadResults(id) {
    // находим все результаты
    const allRes = getLocalStorage('results');
    // находим результат с совпадающими name, group, id
    return allRes.find(item => 
      item.id === id && 
      item.name === this.name && 
      item.group === this.group);
  },

  // записывает результат
  set result(res) {
    res.name = this.name;
    res.group = this.group;
    // находим все результаты
    const allRes = getLocalStorage('results');
    // находим результат с совпадающими name, group, id
    let obj = allRes.find(item => 
      item.id === res.id && 
      item.name === this.name && 
      item.group === this.group);
    if (obj) {
      // если объект есть - переписываем результат
      obj.resultMask = res.resultMask;
      obj.results = res.results;
    } else {
      // иначе просто добавляем
      allRes.push(res);
    }
    // записыаем в localstorage
    setLocalStorage('results', allRes);
  }
} 

export default User;
