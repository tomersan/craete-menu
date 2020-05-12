// console.log('done')


// let linkName = ['Home', 'Shop', 'About',  'Contacts']
// let linksUrl = ['/index.html', '/shop.html', '/contacts.html']

// <a href="linksUrl[i]">linkName[i]</a>

//let firstLink = {name: 'Home', url : '/index.html'}


let navigationLinks = [{
        name: 'Home',
        url: '/index.html'
    },
    {
        name: 'Shop',
        url: '/shop.html'
    },
    {
        name: 'About',
        url: '/about.html'
    },
    {
        name: 'Our Story',
        url: '/our-story.html'
    },
    {
        name: 'Contacts',
        url: '/contacts.html'
    },
]


// for (let i = 0; i < navigationLinks.length; i++) {
//     let linkItem = navigationLinks[i]

//     console.log(linkItem.name)
//     console.log(linkItem.url)

//     navigationList.innerHTML += '<li class="nav-item"><a class="nav-link" href="'+ linkItem.url +'">' + linkItem.name +'</a></li>';


// }

let navigationItems = document.createElement('ul');
// <ul></ul> created 
// <ul id="navigationList" class="navbar-nav"></ul>
for (let i = 0; i < navigationLinks.length; i++) {
    let navigationli = document.createElement('li');
    let linkItem = navigationLinks[i];
    navigationli.innerHTML +=
        '<class="nav-item"><a class="nav-link" href="' +
        linkItem.url + '">' +
        linkItem.name +
        '</a>';
        navigationItems.appendChild(navigationli)

}

navigation.appendChild(navigationItems)

