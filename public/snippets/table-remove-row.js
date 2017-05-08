document.getElementById('btn-nuke-first-row')
        .addEventListener(
            'click',
          () => {
               document.getElementsByTagName('tbody')[0]
                       .getElementsByTagName('tr')[0].remove()
          })