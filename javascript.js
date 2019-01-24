let socials = {
  facebook: {
    url: 'https://www.facebook.com/profile.php?id=100010139289341',
    icon: 'https://pngimage.net/wp-content/uploads/2018/05/facebook-logo-round-png-3.png'
  } ,
  youtube: {
    url: 'https://github.com/pablobiedma',
    icon: 'https://img.icons8.com/metro/1600/github.png'
  },
  twitter: { 
    url: 'https://twitter.com/pablobiedma',
    icon: 'http://www.stickpng.com/assets/images/5a2fe479cc45e43754640849.png'
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/pablobiedma/',
    icon: 'https://freeiconshop.com/wp-content/uploads/edd/linkedin-outline.png'
  },
  instagram: {
    url: 'https://www.instagram.com/pablo_biedma/',
    icon: 'https://tanglesandtail.com/wp-content/uploads/2016/10/instagram-outline.png'
  } 
}

let socialIcons = '';
for(let social in socials) {
  socialIcons += `<a href="${socials[social].url}" style="display:inline-block;margin-right:6px"><img src="${socials[social].icon}" width="20" style="display: block"></a>`
}

document.getElementById('sociales').innerHTML = socialIcons;
