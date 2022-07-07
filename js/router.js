export class Router {

  routes = {}
  background = document.querySelector('.background')

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    
    //tira o pradaro de redirecionamentoi do clik
    event.preventDefault()
  
  
    window.history.pushState({}, "", event.target.href)
  
  
    this.handle()
  }

  handle(event) {
    const { pathname } = window.location
    console.log(typeof(pathname), pathname )
  
    const route = this.routes[pathname] || this.routes[404]
    console.log(route)

    
    //tetch vai buscar () tehen -> entao 
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
    const img = pathname.replace( '/' , '')


    switch (img === 'universe', img === 'explore') {
      case true, false:
        this.background.classList.add(pathname.replace( '/' , ''))
        this.background.classList.remove('explore')
        this.background.classList.remove('')

        break;
      
      case false, true:
        this.background.classList.add(img)
        this.background.classList.remove('universe')
        this.background.classList.remove('')

        break;
      case false, false:
        this.background.classList.remove('explore')
        this.background.classList.remove('universe')
        // this.background.classList.add('')

      break;
    }
  

  }


  

}

