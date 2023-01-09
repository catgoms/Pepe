setInterval(()=>{

    let imgs = document.querySelectorAll('img');
    imgs.forEach((a, i)=>{
        a.src = 'https://images.chosun.com/resizer/u9nJRxs0BbtjygJ4HzKukecXnOk=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/UVBJZL3RXAB36BDSHVM3MW2WNY.jpg'
    })
    
}, 500)