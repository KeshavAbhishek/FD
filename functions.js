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