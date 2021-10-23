document.getElementById('submitButton').addEventListener('mouseover',()=>{
    document.getElementById('submitButton').style.width='80%';
    document.getElementById('submitButton').style.transition='all 0.5s ease-in-out';
});

document.getElementById('submitButton').addEventListener('mouseleave',()=>{
    document.getElementById('submitButton').style.width='50%';
    document.getElementById('submitButton').style.transition='all 0.5s ease-in-out';
});

document.getElementById('nameEntry').addEventListener('mouseover',()=>{
    document.getElementById('nameEntry').style.width='85%';
    document.getElementById('nameEntry').style.borderRadius='50px';
    document.getElementById('nameEntry').style.transition='all 0.5s ease-in-out';
});

document.getElementById('ageEntry').addEventListener('mouseover',()=>{
    document.getElementById('ageEntry').style.width='85%';
    document.getElementById('ageEntry').style.borderRadius='50px';
    document.getElementById('ageEntry').style.transition='all 0.5s ease-in-out';
});

document.getElementById('emailEntry').addEventListener('mouseover',()=>{
    document.getElementById('emailEntry').style.width='85%';
    document.getElementById('emailEntry').style.borderRadius='50px';
    document.getElementById('emailEntry').style.transition='all 0.5s ease-in-out';
});

document.getElementById('feebackEntry').addEventListener('mouseover',()=>{
    document.getElementById('feebackEntry').style.width='85%';
    document.getElementById('feebackEntry').style.transition='all 0.5s ease-in-out';
});

document.getElementById('nameEntry').addEventListener('mouseleave',()=>{
    document.getElementById('nameEntry').style.width='80%';
    document.getElementById('nameEntry').style.borderRadius='5px';
    document.getElementById('nameEntry').style.transition='all 0.5s ease-in-out';
});

document.getElementById('ageEntry').addEventListener('mouseleave',()=>{
    document.getElementById('ageEntry').style.width='80%';
    document.getElementById('ageEntry').style.borderRadius='5px';
    document.getElementById('ageEntry').style.transition='all 0.5s ease-in-out';
});

document.getElementById('emailEntry').addEventListener('mouseleave',()=>{
    document.getElementById('emailEntry').style.width='80%';
    document.getElementById('emailEntry').style.borderRadius='5px';
    document.getElementById('emailEntry').style.transition='all 0.5s ease-in-out';
});

document.getElementById('feebackEntry').addEventListener('mouseleave',()=>{
    document.getElementById('feebackEntry').style.width='80%';
    document.getElementById('feebackEntry').style.transition='all 0.5s ease-in-out';
});

var containerHeight='16vh';

function showhidemenu(){
    
    if(containerHeight=='16vh'){
        document.getElementById('container').style.height='37vh';
        document.getElementById('container').style.transition='height 0.5s ease-in-out';
        containerHeight='37vh';
    } 
    else if(containerHeight=='37vh'){
        document.getElementById('container').style.height='16vh';
        document.getElementById('container').style.transition='height 0.5s ease-in-out';
        containerHeight='16vh';
    }
}

document.getElementById('siteDescription').addEventListener('mouseover',()=>{
    document.getElementById('siteDescription').style.background = 'linear-gradient(to right, #1a1b1c, #2a2b2c, #3a3b3c, #2a2b2c, #1a1b1c)';
    // document.getElementById('siteDescription').style.backgroundColor= '#000';
    document.getElementById('siteDescription').style.color = '#fff';
    document.getElementById('siteDescription').style.cursor = 'pointer';
    document.getElementById('siteDescription').style.transition = 'all 0.5s ease-in-out';
});

document.getElementById('siteDescription').addEventListener('mouseleave',()=>{
    document.getElementById('siteDescription').style.background = 'none';
    document.getElementById('siteDescription').style.backgroundColor= '#fff';
    document.getElementById('siteDescription').style.color = '#000';
    document.getElementById('siteDescription').style.cursor = 'pointer';
    document.getElementById('siteDescription').style.transition = 'all 0.5s ease-in-out';
});

// Some crazy animation

var descText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolores autem nulla consequuntur dolorem alias aperiam ea impedit, illo tempora nobis facilis, laudantium repellat numquam minima quibusdam minus libero cupiditate quas labore? Iste odit quibusdam sequi consectetur inventore, repudiandae laudantium voluptas! Ratione excepturi pariatur voluptates ipsum? Cumque quam nostrum animi!';
var currentTextContent_ = '';
var i = 0;

function animator(){
    if(i < descText.length){
        currentTextContent_ += descText[i];
        i += 1;
        document.getElementById('siteDescription').innerText = currentTextContent_;
    }
    else{
        return
    }
}

function startAnimator(){
    setInterval(animator, 10);
}

setTimeout(startAnimator, 2500);