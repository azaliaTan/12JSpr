'uset strict';


document.querySelector('.ac').addEventListener('click',function(event){
    let target=event.target.closest('.asc_item');
    if(!target) return;

    target.classList.toggle('active');
    let p=target.querySelector('p');
     


    let items = document.querySelectorAll('.asc_item');
    
    items.forEach(item => {
        if (item !== target) {
            item.classList.remove('active');
            item.classList.remove('btn');
            let p = item.querySelector('p');
            if (p) p.style.height = '';
        }
    });

    if(target.classList.contains('active')){
        p.style.height=p.scrollHeight+'px';
        target.classList.add('btn');

    }else{
        p.style.height='';
    }

})
