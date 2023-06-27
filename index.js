function introduction(name) {
    return(`Hi,my name is ${name}`);

}
 {console.log(introduction(`Tony`) )
 console.log(introduction (`Brian`) )
}
function introductionWithLanguage( name,language) {
    return(`Hi,my  name is ${name} and I am learning to program in ${language}`);

}
console.log(introductionWithLanguage (`Tony`, `Ember.js`));
console.log(introductionWithLanguage (`Brian`, `React`));

function introductionWithLanguageOptional (name , language = `Javascript`) {
    return(`Hi, my name is ${name} and I am learning to program in ${language}`);

}
console.log( introductionWithLanguageOptional("Tony"));

function (introductionWithLanguageOptional (name, language =  `JavaScript`) {
 return `Hi, my name is ${name} and I'm learning to program in ${language}`;

}
console.log(introductionWithLanguageOptional (`Tony` , `JavaScript`));
 