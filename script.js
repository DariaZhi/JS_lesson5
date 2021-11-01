// 1. На странице в html задать список элементов li с числами. Джававскриптом нужно выбрать из этого списка четные числа и создать из них массив. Затем, используя метод forEach, создать из массива новый список элементов li и поместить эти элементы в исходный тег ul. Для обхода через querySelectorAll использовать цикл for-of (forEach работать не будет)

const liList = [...document.querySelectorAll('li')];
const ulList = document.querySelector('ul');


const liListWithEven = liList.filter((item) => {

    return item.innerHTML % 2 == 0

}
)
console.log(liListWithEven)

liListWithEven.forEach((item) => {
    const cloneElement = item.cloneNode(true);
    ulList.append(cloneElement);
})


// 2. Создать разметку формы с инпутом для текста и селектом для категории (добавить несколько option). 
// Под формой должен быть список ul. В этот список каждую секунду добавляется новый элемент li. Для добавления можно использовать функцию setInterval https://learn.javascript.ru/settimeout-setinterval


const basicForm = `
<div class="container">
  <form style="max-width: 400px; padding: 20px;">
    <fieldset>

        <div class="mb-3">
             <label for="disabledTextInput" class="form-label">Just input</label>
             <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
        </div>
        <div class="mb-3">
             <label for="disabledSelect" class="form-label">Just select</label>
             <select id="disabledSelect" class="form-select">
                <option>Select 1</option>
                <option>Select 2</option>
                <option>Select 3</option>
             </select>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </fieldset>
  </form>
</div>
`

document.body.innerHTML = document.body.innerHTML + basicForm;

function EverySecUpdatedList() {
    const ulList = document.createElement('ul');
    let num = 1;

    setInterval(() => {
        const liList = document.createElement('li');
        liList.textContent = 'hop ' + num;
        num++
        ulList.append(liList);
    }, 1000)
    document.body.append(ulList);
}

EverySecUpdatedList()





