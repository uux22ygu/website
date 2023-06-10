//querSelector All - gives colleciotn
// innerHtml - maybe use it to add strong or something like after fetch
// attributes will be useufl for li one
// get attribute
// getting computer style - window.getComputedStyle

// add a classlist by doing var.classList.add('classname')

// Append - does not work in internet explorer - so we didn't use it - accesibilty concerns
//Append() - However is good if you want to append text  (it give a error (allows us to insert last child of a element)

//Prepend() - does not work on I.E (first child of element
//Append() Child
// Adjacent - sibling  (look below)
// targetElement.insertAdjacentElement(position,element);
// the postions are: 'beforebegin' , 'afterbegin' , 'beforeend' , 'beforeend'




const MainHeader = document.querySelector('header')
MainHeader.classList.add('chapterHeader')
const Nav = document.querySelector('nav');
const NavUl = document.createElement('ul');
NavUl.classList.add('mainNav')


const SearchLi = document.createElement('li');
const SearchBar = document.createElement('input');
SearchBar.setAttribute('type','text');
SearchBar.setAttribute('id','search_bar');
SearchBar.classList.add('search_bar');
SearchBar.setAttribute('name','search_bar');
SearchBar.setAttribute('placeholder','Search')

//maybe a for loop to create li elements


const NavLi1 = document.createElement('li');

const NavLi2 = document.createElement('li');


const NavLi3 = document.createElement('li');


const NavLi4 = document.createElement('li');


const NavLi5 = document.createElement('li');

const NavLi6 = document.createElement('li');
NavLi6.setAttribute('id','joinUs');

SearchLi.appendChild(SearchBar);
NavLi1.innerText = 'Home';
NavLi2.innerText = 'Global Picture';
NavLi3.innerText = 'Surface Transport';
NavLi4.innerText = 'Waste';
NavLi5.innerText = 'About Us';
NavLi6.innerText = 'Join Us';







NavUl.appendChild(SearchLi);
//for loop to append

NavUl.appendChild(NavLi1);
NavUl.appendChild(NavLi2);
NavUl.appendChild(NavLi3);
NavUl.appendChild(NavLi4);
NavUl.appendChild(NavLi5);
NavUl.appendChild(NavLi6);

Nav.appendChild(NavUl);


///////////////////////////////////////////////// ---x-----------------------------------------------------x-----------------x

/// The Div in header
const NavDiv =  document.createElement('div');
NavDiv.classList.add('mainHeader')
const NavDivH1 = document.createElement('h1');
const NavDivP = document.createElement('p');

NavDivH1.innerText = 'The Global Picture';
NavDivP.innerText = 'How has climate change effected different aspects of our environment';
NavDiv.appendChild(NavDivH1);
NavDiv.appendChild(NavDivP);

Nav.insertAdjacentElement('afterend',NavDiv);

/////////////////////////////////////////////////////// -------------------x--------------------------------x----------------x-------x

//Overview  - in the following section ... div


const OverviewHeaderDiv = document.createElement('div');
OverviewHeaderDiv.classList.add('OverviewTextFormat')
const OverviewHeaderDivH2 = document.createElement('h2');
const OverviewHeaderDivP = document.createElement('p');

OverviewHeaderDivH2.innerText = 'Overview';
OverviewHeaderDivP.innerText = 'In the following section we cover the following topics:';

OverviewHeaderDiv.append(OverviewHeaderDivH2);
OverviewHeaderDiv.append(OverviewHeaderDivP);

const Main = document.querySelector('main');

Main.appendChild(OverviewHeaderDiv);


///////////////////////////////////////////////////////////// -------------------------x-------------------------------x----------------x----------x

/// Overview Divs and Contains - so basicall y the main 3 div blocks and section

//PROBALY NEED TO PEROFMR FETCH HERE BECAUSE OF IMAGES

//ADD Icon Classes


const OverviewContainer = document.createElement('section');
OverviewContainer.classList.add('OverviewContainer');
const OverviewDiv = document.createElement('div');
OverviewDiv.classList.add('Overview')
const OverviewDiv2 = document.createElement('div');
OverviewDiv2.classList.add('Overview')
const OverviewDiv3 = document.createElement('div');
OverviewDiv3.classList.add('Overview')

const OverviewDivImage = document.createElement('img');
const OverviewDivImage2 = document.createElement('img');
const OverviewDivImage3 = document.createElement('img');

const OverviewDivh3 = document.createElement('h3');
const OverviewDiv2h3 = document.createElement('h3');
const OverviewDiv3h3 = document.createElement('h3');

const OverviewDivBrief = document.createElement('p');
OverviewDivBrief.classList.add('OverviewBrief');
const OverviewDivBrief2 = document.createElement('p');
OverviewDivBrief2.classList.add('OverviewBrief');
const OverviewDivBrief3 = document.createElement('p');
OverviewDivBrief3.classList.add('OverviewBrief');

const OverviewDivReadMore = document.createElement('p');
const OverviewDivReadMore2 = document.createElement('p');
const OverviewDivReadMore3 = document.createElement('p');
OverviewDivReadMore.classList.add('ReadMore');
OverviewDivReadMore2.classList.add('ReadMore');
OverviewDivReadMore3.classList.add('ReadMore');


const OverviewReadMoreIcon = document.createElement('i');
OverviewReadMoreIcon.setAttribute('class','fa-solid fa-bars');

const OverviewReadMoreIcon2 = document.createElement('i');
OverviewReadMoreIcon2.setAttribute('class','fa-solid fa-bars');

const OverviewReadMoreIcon3 = document.createElement('i');
OverviewReadMoreIcon3.setAttribute('class','fa-solid fa-bars');



const OverviewReadMoreLink = document.createElement('a');
const OverviewReadMoreLink2 = document.createElement('a');
const OverviewReadMoreLink3 = document.createElement('a');
OverviewReadMoreLink.setAttribute('href','dynchapter.html#Our_Climate');
OverviewReadMoreLink.classList.add('OverviewLink');

OverviewReadMoreLink2.setAttribute('href','dynchapter.html#Net_Zero');
OverviewReadMoreLink2.classList.add('OverviewLink');

OverviewReadMoreLink3.setAttribute('href','dynchapter.html#International_Policy');
OverviewReadMoreLink3.classList.add('OverviewLink');




OverviewReadMoreLink.innerText = "Read More";
OverviewReadMoreLink2.innerText = "Read More";
OverviewReadMoreLink3.innerText = "Read More";





// OverviewDivImage.src = "images/OverviewIcon.png";
// OverviewDivImage2.src = "images/OverviewIcon2.png";
// OverviewDivImage3.src = "images/OverviewIcon3.png";

OverviewDivh3.innerText = 'The Global Climate';
OverviewDiv2h3.innerText = 'Net Zero Progress';
OverviewDiv3h3.innerText = 'Global Climate Policy';

// OverviewDivBrief.innerText = 'How has global climate been effected alongside greenhouse gases, and how do we adapt?';
// OverviewDivBrief2.innerText = 'How do national and corporate commites use Net-Zero to drive down cost and reductions?';
// OverviewDivBrief3.innerText = 'What were the key negotiations that happened in the UN negotiations of COP26';


OverviewDivReadMore.appendChild(OverviewReadMoreIcon);
OverviewDivReadMore.appendChild(OverviewReadMoreLink);
OverviewDivReadMore2.appendChild(OverviewReadMoreIcon2);
OverviewDivReadMore2.appendChild(OverviewReadMoreLink2);
OverviewDivReadMore3.appendChild(OverviewReadMoreIcon3);
OverviewDivReadMore3.appendChild(OverviewReadMoreLink3);

OverviewDiv.appendChild(OverviewDivImage);
OverviewDiv.appendChild(OverviewDivh3);
OverviewDiv.appendChild(OverviewDivBrief);
OverviewDiv.appendChild(OverviewDivReadMore);



OverviewDiv2.appendChild(OverviewDivImage2);
OverviewDiv2.appendChild(OverviewDiv2h3);
OverviewDiv2.appendChild(OverviewDivBrief2);
OverviewDiv2.appendChild(OverviewDivReadMore2);



OverviewDiv3.appendChild(OverviewDivImage3);
OverviewDiv3.appendChild(OverviewDiv3h3);
OverviewDiv3.appendChild(OverviewDivBrief3);
OverviewDiv3.appendChild(OverviewDivReadMore3);






OverviewContainer.appendChild(OverviewDiv);

OverviewContainer.appendChild(OverviewDiv2);


OverviewContainer.appendChild(OverviewDiv3);

OverviewHeaderDiv.insertAdjacentElement('afterend',OverviewContainer);




function onStreamProcessed(text){
    // console.log(text);
    const images =text.split('\n')
    const imagesrc1 = images[0];
    const imagesrc2 = images[1];
    const imagesrc3= images[2];
    // console.log(imagesrc1);
    OverviewDivImage.src = imagesrc1;
    OverviewDivImage2.src = imagesrc2;
    OverviewDivImage3.src = imagesrc3;
    // console.log(OverviewDivImage)
   


}

// this function will call if fetch is succesful
function onResponse(response){
    // console.log(response);
    response.text().then(onStreamProcessed);

}

//this function will call if fetch fails
function onError(e){

}

fetch('images.txt')
.then(onResponse,onError);




function onStreamProcessed2(text){
   
    const overviewtext =text.split('\n')
   
    const overviewtext1 = overviewtext[0];
    const overviewtext2 = overviewtext[1];
    const overviewtext3 =overviewtext[2];
    OverviewDivBrief.innerText = overviewtext1;
    OverviewDivBrief2.innerText = overviewtext2;
    OverviewDivBrief3.innerText = overviewtext3;

}




function onResponse2(response){
    console.log(response);
    response.text().then(onStreamProcessed2);

}

//this function will call if fetch fails
function onError2(e){

}

fetch('overviewcontent.txt')
.then(onResponse2,onError2);


















///////////////////////////////////////////////////////----------------------------------------------x--------------------------------------x
const mainSection = document.createElement('section');
mainSection.classList.add('mainSection');
const SubChapter1Article = document.createElement('article');
SubChapter1Article.setAttribute('class','Chapters');



const SubChapter1H2 = document.createElement('h2');
SubChapter1H2.setAttribute('id','Our_Climate')
const SubChapter1P = document.createElement('p');
SubChapter1H2.innerText = 'The Global Climate';
SubChapter1P.innerText = 'This chapter will give 3 topics: Global Climate Change, Greenhouse gas emmision,global progress on adaption';

SubChapter1Article.appendChild(SubChapter1H2);
SubChapter1Article.appendChild(SubChapter1P);


const Chapter1Div = document.createElement('div');
Chapter1Div.classList.add('ChapterSection');
SubChapter1Article.appendChild(Chapter1Div);


const ClimateChangeH3 = document.createElement('h3');
const ClimateChangeP = document.createElement('p');

ClimateChangeH3.innerText = '(a) Global Climate Change';
ClimateChangeP.innerText = '';
Chapter1Div.appendChild(ClimateChangeH3);
Chapter1Div.appendChild(ClimateChangeP);



const ClimateChangeFigure = document.createElement('figure');
const ClimateChangeImage = document.createElement('img');
const ClimateChangeCaption = document.createElement('figcaption');
// ClimateChangeImage.src = 'images/Figure 1.1.PNG';
// ClimateChangeCaption.innerText='Fig 1.1 Global average surface temperature relative to pre-industrial levels';

ClimateChangeFigure.appendChild(ClimateChangeImage);
ClimateChangeFigure.appendChild(ClimateChangeCaption);
Chapter1Div.appendChild(ClimateChangeFigure);



const GreenhouseH3 = document.createElement('h3');
const GreenhouseP = document.createElement('p');

GreenhouseH3.innerText = '(b) Global greenhouse emmisions';
GreenhouseP.innerText = '';
Chapter1Div.appendChild(GreenhouseH3);
Chapter1Div.appendChild(GreenhouseP);



const GreenhouseFigure = document.createElement('figure');
const GreenhouseImage = document.createElement('img');
const GreenhouseCaption = document.createElement('figcaption');


// GreenhouseImage.src = 'images/Figure 1.2.PNG';
// GreenhouseCaption.innerText='Fig 1.2 Global GHG emmisions (1990-2019) and estimated fossil CO2 emmisions';

GreenhouseFigure.appendChild(GreenhouseImage);
GreenhouseFigure.appendChild(GreenhouseCaption);
Chapter1Div.appendChild(GreenhouseFigure);


const AdaptionH3 = document.createElement('h3');
const AdaptionP = document.createElement('p');

AdaptionH3.innerText = '(c) Global progress on adaption';
AdaptionP.innerText = '';
Chapter1Div.appendChild(AdaptionH3);
Chapter1Div.appendChild(AdaptionP);


mainSection.appendChild(SubChapter1Article);
OverviewContainer.insertAdjacentElement('afterend',mainSection);



function onStreamProcessed3(text){
   
    const chapter1content = text.split('!')
    const climateparagraph1 = chapter1content[0];
    ClimateChangeP.innerHTML = climateparagraph1;
    const greenhouseparagraph1 = chapter1content[1];
    GreenhouseP.innerHTML = greenhouseparagraph1;
    const adaptionparagraph1 = chapter1content[2];
    AdaptionP.innerHTML = adaptionparagraph1;

   
   
// const jim = text.split('\n\n')
// const lol = jim[2]
// console.log(lol)
 
   

    // const overviewtext =text.split('\n')
    // console.log(overviewtext)
    // const overviewtext1 = overviewtext[0];
    // const overviewtext2 = overviewtext[1];
    // const overviewtext3 =overviewtext[2];
    // OverviewDivBrief.innerText = overviewtext1;
    // OverviewDivBrief2.innerText = overviewtext2;
    // OverviewDivBrief3.innerText = overviewtext3;

}








function onResponse3(response){
    // console.log(response);
    response.text().then(onStreamProcessed3);

}

//this function will call if fetch fails
function onError3(e){

}

fetch('globalclimatecontent.txt')
.then(onResponse3,onError3)



function onStreamProcessed4(text){
    console.log(text)
    const chapter1images = text.split('\n');
    const climatechangeimage = chapter1images[0];
    ClimateChangeImage.src = climatechangeimage;
    const climatechangecaption = chapter1images[1];
    ClimateChangeCaption.innerText = climatechangecaption;

    const greenhouseimage = chapter1images[2];
    GreenhouseImage.src = greenhouseimage;
    const greenhousecaption = chapter1images[3];
    GreenhouseCaption.innerText = greenhousecaption;



//     GreenhouseImage.src = 'images/Figure 1.2.PNG';
// GreenhouseCaption.innerText='Fig 1.2 Global GHG emmisions (1990-2019) and estimated fossil CO2 emmisions';



//     ClimateChangeImage.src = 'images/Figure 1.1.PNG';
// ClimateChangeCaption.innerText='Fig 1.1 Global average surface temperature relative to pre-industrial levels';
   
    // const chapter1content = text.split('!')
    // const climateparagraph1 = chapter1content[0];
    // ClimateChangeP.innerHTML = climateparagraph1;
    // const greenhouseparagraph1 = chapter1content[1];
    // GreenhouseP.innerHTML = greenhouseparagraph1;
    // const adaptionparagraph1 = chapter1content[2];
    // AdaptionP.innerHTML = adaptionparagraph1;

   
   
// const jim = text.split('\n\n')
// const lol = jim[2]
// console.log(lol)
 
   

    // const overviewtext =text.split('\n')
    // console.log(overviewtext)
    // const overviewtext1 = overviewtext[0];
    // const overviewtext2 = overviewtext[1];
    // const overviewtext3 =overviewtext[2];
    // OverviewDivBrief.innerText = overviewtext1;
    // OverviewDivBrief2.innerText = overviewtext2;
    // OverviewDivBrief3.innerText = overviewtext3;

}




function onResponse4(response){
    // console.log(response);
    response.text().then(onStreamProcessed4);

}

//this function will call if fetch fails
function onError4(e){

}

fetch('globatclimateimages.txt')
.then(onResponse4,onError4)



///////////////////////////////////////////////////////

const SubChapter2Article = document.createElement('article');
SubChapter2Article.classList.add('SubChapter2');

const SubChapter2H3 = document.createElement('h2');
const SubChapter2P = document.createElement('p');
SubChapter2H3.innerText = 'Global Progress towards Net Zero';
SubChapter2H3.setAttribute('id','Net_Zero');


SubChapter2Article.appendChild(SubChapter2H3);
SubChapter2Article.appendChild(SubChapter2P);


const SubChapter2Section = document.createElement('section');
SubChapter2Section.classList.add('SubChapter2_Section');
SubChapter2Article.appendChild(SubChapter2Section);


SubChapter2Div1 = document.createElement('div');
SubChapter2Div1.classList.add('SubChapter2_Divs');
SubChapter2Section.appendChild(SubChapter2Div1);


const SubChapter2Div1H3 = document.createElement('h3');
SubChapter2Div1H3.innerText = 'Power';
const SubChapter2Div1P = document.createElement('p');

SubChapter2Div1.appendChild(SubChapter2Div1H3);
SubChapter2Div1.appendChild(SubChapter2Div1P);


const SubChapter2Div1Figure = document.createElement('figure');
const SubChapter2Div1Image = document.createElement('img');
SubChapter2Div1Image.classList.add('SubChapter2_Images')
const SubChapter2Div1Caption = document.createElement('figcaption');


SubChapter2Div1Figure.appendChild(SubChapter2Div1Image);
SubChapter2Div1Figure.appendChild(SubChapter2Div1Caption);
SubChapter2Div1.appendChild(SubChapter2Div1Figure);










SubChapter2Div2 = document.createElement('div');
SubChapter2Div2.classList.add('SubChapter2_Divs2');
SubChapter2Section.appendChild(SubChapter2Div2);



const SubChapter2Div2H3 = document.createElement('h3');
SubChapter2Div2H3.innerText = 'Cars';
const SubChapter2Div2P = document.createElement('p');

SubChapter2Div2.appendChild(SubChapter2Div2H3);
SubChapter2Div2.appendChild(SubChapter2Div2P);


const SubChapter2Div2Figure = document.createElement('figure');
const SubChapter2Div2Image = document.createElement('img');
SubChapter2Div2Image.classList.add('SubChapter2_Images');

const SubChapter2Div2Caption = document.createElement('figcaption');


SubChapter2Div2Figure.appendChild(SubChapter2Div2Image);
SubChapter2Div2Figure.appendChild(SubChapter2Div2Caption);
SubChapter2Div2.appendChild(SubChapter2Div2Figure);









SubChapter2Div3 = document.createElement('div');
SubChapter2Div3.classList.add('SubChapter2_Divs');
SubChapter2Section.appendChild(SubChapter2Div3);



const SubChapter2Div3H3 = document.createElement('h3');
SubChapter2Div3H3.innerText = 'Heating';
const SubChapter2Div3P = document.createElement('p');

SubChapter2Div3.appendChild(SubChapter2Div3H3);
SubChapter2Div3.appendChild(SubChapter2Div3P);


const SubChapter2Div3Figure = document.createElement('figure');
const SubChapter2Div3Image = document.createElement('img');
SubChapter2Div3Image.classList.add('SubChapter2_Images');




const SubChapter2Div3Caption = document.createElement('figcaption');


SubChapter2Div3Figure.appendChild(SubChapter2Div3Image);
SubChapter2Div3Figure.appendChild(SubChapter2Div3Caption);
SubChapter2Div3.appendChild(SubChapter2Div3Figure);




SubChapter2Div4 = document.createElement('div');
SubChapter2Div4.classList.add('SubChapter2_Divs2');
SubChapter2Section.appendChild(SubChapter2Div4);



const SubChapter2Div4H3 = document.createElement('h3');
SubChapter2Div4H3.innerText = 'Forests';
const SubChapter2Div4P = document.createElement('p');
SubChapter2Div4P.innerText = '';
SubChapter2Div4.appendChild(SubChapter2Div4H3);
SubChapter2Div4.appendChild(SubChapter2Div4P);


const SubChapter2Div4Figure = document.createElement('figure');
const SubChapter2Div4Image = document.createElement('img');
SubChapter2Div4Image.classList.add('SubChapter2_Images');
const SubChapter2Div4Caption = document.createElement('figcaption');

SubChapter2Div4Figure.appendChild(SubChapter2Div4Image);
SubChapter2Div4Figure.appendChild(SubChapter2Div4Caption);
SubChapter2Div4.appendChild(SubChapter2Div4Figure);










mainSection.appendChild(SubChapter2Article);











function onStreamProcessed5(text){
   
    const chapter2content = text.split('!');
    const chapter2main = chapter2content[0];
    SubChapter2P.innerHTML = chapter2main;
    const chapter2powerP = chapter2content[1];
    SubChapter2Div1P.innerHTML = chapter2powerP;
    const chapter2carsP = chapter2content[2];
    SubChapter2Div2P.innerHTML = chapter2carsP;
    const chapter2heatingP = chapter2content[3];
    SubChapter2Div3P.innerHTML = chapter2heatingP;
    const chapter2forestsP = chapter2content[4];
    SubChapter2Div4P.innerHTML = chapter2forestsP;





}




function onResponse5(response){
    // console.log(response);
    response.text().then(onStreamProcessed5);

}

//this function will call if fetch fails
function onError5(e){

}

fetch('globalprogresscontent.txt')
.then(onResponse5,onError5)











function onStreamProcessed6(text){
    console.log(text)
    const chapter2images= text.split('\n');
    const chapter2powerimage = chapter2images[0];
    SubChapter2Div1Image.src = chapter2powerimage;
    const chapter2powercaption = chapter2images[1]
    SubChapter2Div1Caption.innerText = chapter2powercaption;

    const chapter2carsimage = chapter2images[0];
    SubChapter2Div2Image.src = chapter2carsimage;
    const chapter2carscaption = chapter2images[1]
    SubChapter2Div2Caption.innerText = chapter2carscaption;


   
    const chapter2heatingimage = chapter2images[2];
    SubChapter2Div3Image.src = chapter2heatingimage;
    const chapter2heatingcaption = chapter2images[3]
    SubChapter2Div3Caption.innerText = chapter2heatingcaption;

    const chapter2forestimage = chapter2images[4];
    SubChapter2Div4Image.src = chapter2forestimage;
    const chapter2forestcaption = chapter2images[5]
    SubChapter2Div4Caption.innerText = chapter2forestcaption;
}


function onResponse6(response){
    // console.log(response);
    response.text().then(onStreamProcessed6);

}

//this function will call if fetch fails
function onError6(e){

}

fetch('globalprogressimages.txt')
.then(onResponse6,onError6)

///////////////////////////////////

const SubChapter3Article = document.createElement('article');
SubChapter3Article.classList.add('SubChapter3')
const SubChapter3MainH2 = document.createElement('h2');
SubChapter3MainH2.innerText = 'Progress in international climate policy';
SubChapter3MainH2.setAttribute('id','International_Policy');
SubChapter3MainH3 = document.createElement('h3');
SubChapter3MainH3.innerText = 'Key outcomes of COP26';
SubChapter3MainH3.classList.add('SubChapter3OutcomeH3');
SubChapter3MainP = document.createElement('p');
SubChapter3MainP.innerText = '';
SubChapter3MainP.classList.add('SubChapter3OutcomeP');

SubChapter3Article.appendChild(SubChapter3MainH2);
SubChapter3Article.appendChild(SubChapter3MainH3);
SubChapter3Article.appendChild(SubChapter3MainP);


const VideoDiv = document.createElement('div');
VideoDiv.classList.add('VideoContainer');
const VideoTextContainer = document.createElement('div');
VideoTextContainer.classList.add('VideoText');

const VideoH2 = document.createElement('h2');
VideoH2.innerText = 'Glasgow Climate Pact';
VideoH2.classList.add('VideoHeader')

VideoTextContainer.appendChild(VideoH2);


const VideoPlayer = document.createElement('video');
VideoPlayer.classList.add('video-bg');
VideoPlayer.loop = true;
VideoPlayer.muted = true;
VideoPlayer.autoplay = true;

const VideSource =document.createElement('source');
VideSource.setAttribute('src','videos/Pexels Videos 1093662.mp4');

VideoPlayer.appendChild(VideSource)
// VideSource.src = 'videos/Pexels Videos 1093662.mp4';
// VideoSource.setAttribute('type','video/mp4');





VideoDiv.appendChild(VideoTextContainer);
VideoDiv.appendChild(VideoPlayer);



const Chapter3Text = document.createElement('section');
Chapter3Text.classList.add('Chapters3')

const Chapter3Texth2 = document.createElement('h2');
Chapter3Texth2.innerText = 'Glasgow Climate Pact'
Chapter3Texth2.classList.add('VideoHeader');


const Chapter3Content = document.createElement('div');
Chapter3Content.classList.add('VideoTextSection');


const Chapter3ContentP = document.createElement('p');
Chapter3ContentP.innerText = '';
Chapter3Content.appendChild(Chapter3ContentP);


const Chapter3ContentUl = document.createElement('ul');
const Chapter3ContentLi1 = document.createElement('li');
Chapter3ContentLi1.innerText = '';
const Chapter3ContentLi2 = document.createElement('li');
Chapter3ContentLi2.innerText = '';
const Chapter3ContentLi3 = document.createElement('li');
Chapter3ContentLi3.innerText = '';
const Chapter3ContentLi4 = document.createElement('li');
Chapter3ContentLi4.innerText = '';

Chapter3ContentUl.appendChild(Chapter3ContentLi1);
Chapter3ContentUl.appendChild(Chapter3ContentLi2);
Chapter3ContentUl.appendChild(Chapter3ContentLi3);
Chapter3ContentUl.appendChild(Chapter3ContentLi4);


Chapter3Content.appendChild(Chapter3ContentUl)

Chapter3Text.appendChild(Chapter3Texth2);
Chapter3Text.appendChild(Chapter3Content);


SubChapter3Article.appendChild(VideoDiv);
SubChapter3Article.appendChild(Chapter3Text);




SubChapter2Article.insertAdjacentElement('afterend',SubChapter3Article);





function onStreamProcessed10(text){
    const SubChapter3Content= text.split('!');
    const subchapter3mainp = SubChapter3Content[0];
    SubChapter3MainP.innerHTML = subchapter3mainp;

    const chapter3contentp = SubChapter3Content[1];
    Chapter3ContentP.innerHTML = chapter3contentp;

    const chapter3contentli1 = SubChapter3Content[2];
    Chapter3ContentLi1.innerHTML = chapter3contentli1;

    const chapter3contentli2 = SubChapter3Content[3];
    Chapter3ContentLi2.innerHTML = chapter3contentli2;

    const chapter3contentli3 = SubChapter3Content[4];
    Chapter3ContentLi3.innerHTML = chapter3contentli3;

    const chapter3contentli4 = SubChapter3Content[5];
    Chapter3ContentLi4.innerHTML = chapter3contentli4;

   




    // const faqanswer1 = faqanswers[0];
    // FAQP1.innerText = faqanswer1;
    // const faqanswer2 = faqanswers[1];
    // FAQP2.innerText = faqanswer2;
    // const faqanswer3 = faqanswers[2];
    // FAQP3.innerText = faqanswer3;
    // const faqanswer4 = faqanswers[3];
    // FAQP4.innerText = faqanswer4;
    // const faqanswer5 = faqanswers[4];
    // FAQP5.innerText = faqanswer5;
   
}


function onResponse10(response){
    // console.log(response);
    response.text().then(onStreamProcessed10);

}

//this function will call if fetch fails
function onError10(e){

}

fetch('SubChapter3content.txt')
.then(onResponse10,onError10)




// mainSection.appendChild(SubChapter1Article);
// OverviewContainer.insertAdjacentElement('afterend',mainSection);



// SubChapter2Article.classList.add('SubChapter2');




/////////////////////////////////////////////////

const FAQSection = document.createElement('section');
FAQSection.classList.add('FAQ');
mainSection.insertAdjacentElement('afterend',FAQSection);



const FAQSectionH1 = document.createElement('h2');
FAQSectionH1.innerText = 'Frequently Asked Questions';

FAQSection.appendChild(FAQSectionH1);


const FAQDetails1 = document.createElement('details');
const FAQSummary1 = document.createElement('summary');
const FAQP1 = document.createElement('p');

FAQSummary1.innerText = 'What does the Net Zero Strategy demonstrate?';


FAQDetails1.appendChild(FAQSummary1);
FAQDetails1.appendChild(FAQP1);

FAQSection.appendChild(FAQDetails1);



const FAQDetails2= document.createElement('details');
const FAQSummary2 = document.createElement('summary');
const FAQP2 = document.createElement('p');

FAQSummary2.innerText = 'How has the invasion of Ukraine effected global energy demands?';


FAQDetails2.appendChild(FAQSummary2);
FAQDetails2.appendChild(FAQP2);

FAQSection.appendChild(FAQDetails2);


const FAQDetails3= document.createElement('details');
const FAQSummary3 = document.createElement('summary');
const FAQP3 = document.createElement('p');

FAQSummary3.innerText = 'What has the sharp increase in fossil fuel prices lead to?';


FAQDetails3.appendChild(FAQSummary3);
FAQDetails3.appendChild(FAQP3);

FAQSection.appendChild(FAQDetails3);


const FAQDetails4= document.createElement('details');
const FAQSummary4 = document.createElement('summary');
const FAQP4 = document.createElement('p');

FAQSummary4.innerText = 'What has steep rise in gas prices lead to?';


FAQDetails4.appendChild(FAQSummary4);
FAQDetails4.appendChild(FAQP4);

FAQSection.appendChild(FAQDetails4);


const FAQDetails5= document.createElement('details');
const FAQSummary5 = document.createElement('summary');
const FAQP5 = document.createElement('p');

FAQSummary5.innerText = 'What are countries doing as a result of a rise in energy prices?';


FAQDetails5.appendChild(FAQSummary5);
FAQDetails5.appendChild(FAQP5);

FAQSection.appendChild(FAQDetails5);




function onStreamProcessed7(text){
    const faqanswers = text.split('!')
    const faqanswer1 = faqanswers[0];
    FAQP1.innerText = faqanswer1;
    const faqanswer2 = faqanswers[1];
    FAQP2.innerText = faqanswer2;
    const faqanswer3 = faqanswers[2];
    FAQP3.innerText = faqanswer3;
    const faqanswer4 = faqanswers[3];
    FAQP4.innerText = faqanswer4;
    const faqanswer5 = faqanswers[4];
    FAQP5.innerText = faqanswer5;
   
}


function onResponse7(response){
    // console.log(response);
    response.text().then(onStreamProcessed7);

}

//this function will call if fetch fails
function onError7(e){

}

fetch('faq.txt')
.then(onResponse7,onError7)






////////////////////////////////////////////////
const SignUpBoard = document.createElement('section');
SignUpBoard.classList.add('signingupboard');

FAQSection.insertAdjacentElement('afterend',SignUpBoard);

const SignUpBoardH2 = document.createElement('h2');
const SignUpBoardP = document.createElement('p');
const SignUpBoardButton = document.createElement('button');

SignUpBoardH2.innerText = 'Dont forget to sign up to our newsletters !';
SignUpBoardP.innerText = 'A great opportunity to get involved in our community. Click the button below to get started';
SignUpBoardButton.innerText = 'Join Us';

SignUpBoard.appendChild(SignUpBoardH2);
SignUpBoard.appendChild(SignUpBoardP);
SignUpBoard.appendChild(SignUpBoardButton);

/////////////////////////////////////////////////
const MainElement = document.querySelector('main')
const Footer = document.querySelector('footer')
MainElement.insertAdjacentElement('afterend',Footer);


const FooterH3 = document.createElement('h3');
FooterH3.innerText = 'Get Connected';

Footer.appendChild(FooterH3);


const SocialMedia = document.createElement('section');
SocialMedia.classList.add('SocialMedia');
Footer.appendChild(SocialMedia);


const SocialImage1 = document.createElement('img');



SocialImage1.classList.add('SocialImages');

const SocialImage2 = document.createElement('img');



SocialImage2.classList.add('SocialImages');


const SocialImage3 = document.createElement('img');



SocialImage3.classList.add('SocialImages');

SocialMedia.appendChild(SocialImage1);
SocialMedia.appendChild(SocialImage2);
SocialMedia.appendChild(SocialImage3);


const FooterLinks = document.createElement('section');
FooterLinks.classList.add('footerlinks')
Footer.appendChild(FooterLinks);

const FooterLinksDiv1 = document.createElement('div');
const FooterLinksDiv1A1 = document.createElement('a');
const FooterLinksDiv1A2 =document.createElement('a');
const FooterLinksDiv1P = document.createElement('p');
const FooterLinksDiv1P2 = document.createElement('p');

FooterLinksDiv1A1.innerText = 'Home';
FooterLinksDiv1P.appendChild(FooterLinksDiv1A1);

FooterLinksDiv1A2.innerText = 'Global Picture';
FooterLinksDiv1P2.appendChild(FooterLinksDiv1A2);

FooterLinksDiv1.appendChild(FooterLinksDiv1P);
FooterLinksDiv1.appendChild(FooterLinksDiv1P2);

FooterLinks.appendChild(FooterLinksDiv1);



const FooterLinksDiv2 = document.createElement('div');
const FooterLinksDiv2A1 = document.createElement('a');
const FooterLinksDiv2A2 =document.createElement('a');
const FooterLinksDiv2P = document.createElement('p');
const FooterLinksDiv2P2 = document.createElement('p');

FooterLinksDiv2A1.innerText = 'Waste';
FooterLinksDiv2P.appendChild(FooterLinksDiv2A1);

FooterLinksDiv2A2.innerText = 'Surface Transport';
FooterLinksDiv2P2.appendChild(FooterLinksDiv2A2);

FooterLinksDiv2.appendChild(FooterLinksDiv2P);
FooterLinksDiv2.appendChild(FooterLinksDiv2P2);

FooterLinks.appendChild(FooterLinksDiv2);


const FooterLinksDiv3 = document.createElement('div');
const FooterLinksDiv3A1 = document.createElement('a');
const FooterLinksDiv3A2 =document.createElement('a');
const FooterLinksDiv3P = document.createElement('p');
const FooterLinksDiv3P2 = document.createElement('p');

FooterLinksDiv3A1.innerText = 'About Us';
FooterLinksDiv3P.appendChild(FooterLinksDiv3A1);

FooterLinksDiv3A2.innerText = 'Join Us';
FooterLinksDiv3P2.appendChild(FooterLinksDiv3A2);

FooterLinksDiv3.appendChild(FooterLinksDiv3P);
FooterLinksDiv3.appendChild(FooterLinksDiv3P2);

FooterLinks.appendChild(FooterLinksDiv3);



function onStreamProcessed8(text){
    const textfaqimages = text.split('\n');
    const textfaqimage1 = textfaqimages[0];
    const textfaqimage2 = textfaqimages[1];
    const textfaqimage3 = textfaqimages[2];
   
    SocialImage1.src = textfaqimage1;
    SocialImage2.src = textfaqimage2;
    SocialImage3.src = textfaqimage3;



}


function onResponse8(response){
    // console.log(response);
    response.text().then(onStreamProcessed8);

}

//this function will call if fetch fails
function onError8(e){

}

fetch('footerimages.txt')
.then(onResponse8,onError8)




////////////////////////////
//Keyboard Navigation

document.addEventListener("keydown",e => {
 
    if(e.key.toLowerCase() === "1" && e.ctrlKey){
       
        window.open("contact.html","_self");


    }
})