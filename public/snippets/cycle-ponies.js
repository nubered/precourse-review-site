document.getElementById('btn-cycle-ponies')
        .addEventListener(
            'click',
          () => {
            let divPonies = document.getElementsByClassName('my-little-pony')
            divPonies[0].parentNode.insertBefore(divPonies[1], divPonies[0])
          })
