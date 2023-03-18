const swap = (arr, pos1, pos2) => {
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
  }


const shuffle = (arr, numSwaps) => {
    for(let i = 0; i < numSwaps; i++) {
      const pos1 = Math.floor(Math.random() * arr.length);
      const pos2 = Math.floor(Math.random() * arr.length);
      swap(arr, pos1, pos2);
    }
}

const bubbleSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j+1]) {
          swap(arr, j, j+1);
        }
      }
    }
    return arr;
}

const selectionSort = (arr) => {
    const n = arr.length;
    for(let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for(let j = i + 1; j < n; j++) {
        if(arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      swap(arr, i, minIndex);
    }
    return arr;
}

const quickSort = (arr, left, right) => {
    if(left < right) {
      const pivotIndex = partition(arr, left, right);
      quick_sort(arr, left, pivotIndex - 1);
      quick_sort(arr, pivotIndex + 1, right);
    }
    return arr;
}

const partition = (arr, left, right, pivot) => {
    let i = left;
    let j = right;
    while(i <= j) {
      while(arr[i] < pivot) {
        i++;
      }
      while(arr[j] > pivot) {
        j--;
      }
      if(i <= j) {
        swap(arr, i, j);
        i++;
        j--;
      }
    }
    return i;
}


function add() {
  const valor = document.getElementById("valor").value;
  const lista = document.getElementById("valores");
  const node = document.createElement("li");
  const textNode = document.createTextNode(valor);
  node.appendChild(textNode);
  lista.appendChild(node);
}

function ordenar() {
  const lista = document.getElementById("valores");
  const selecao = document.getElementById("algoritmo");
  const vetor = Array.from(lista.children).map((node) => eval(node.innerHTML));
  switch (selecao.selectedIndex) {
      case 0:
          bubbleSort(vetor);
          break;
      case 1:
          selectionSort(vetor);
          break;
      case 2:
          quickSort(vetor, 0, vetor.length - 1);
          break;
  }
  lista.innerHTML = vetor.map((valor) => `<li>${valor}</li>`).reduce((anterior, atual) => anterior + atual, "");
}

var misturar = ()=>{
  var todos = []
  var lis = document.getElementsByTagName('li')

  for (var i =0; i < lis.length; i++){
      todos.push(Number(lis[i].innerHTML))
  }

  todos.sort(() => Math.random() - 0.5);

  var lista = document.getElementById('valores').innerHTML;
  lista = ''

  for (var j = 0; j < todos.length; j++){


      lista += '<li>'+todos[j]+'</li>'
      
      document.getElementById('valores').innerHTML = lista;
  }

}