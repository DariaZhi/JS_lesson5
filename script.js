// 1. На странице в html задать список элементов li с числами. Джававскриптом нужно выбрать из этого списка четные числа и создать из них массив. Затем, используя метод forEach, создать из массива новый список элементов li и поместить эти элементы в исходный тег ul. Для обхода через querySelectorAll использовать цикл for-of (forEach работать не будет)

const liList = [...document.querySelectorAll('li')];
const ulList = document.querySelector('ul');

const liListWithEven = liList.filter((item) => {
    return item.innerHTML % 2 == 0
}
)

liListWithEven.forEach((item) => ulList.append(item));





