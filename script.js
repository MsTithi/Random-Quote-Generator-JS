
    const quotes = [
    {
        quote:"Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.",
        author:"William Faulkner"
    },
    {
        quote:"By changing nothing, nothing changes.",
        author:"Tony Robbins"
    },
    {
        quote:"At any given moment, you have the power to say: this is not how the story is going to end .",
        author:"Christine Mason Miller"
    },
    {
        quote:" Never pray to be a better slave when God is trying to get you out of your situation.",
        author:"Shannon L. Alder"
    },
    {
        quote:"Do what is right, not what is easy nor what is popular .",
        author:"Roy T. Bennett"
    },
    {
        quote:" One day I will find the right words, and they will be simple.",
        author:" Jack Kerouac"
    },  
    {
        quote:"The most common way people give up their power is by thinking they don't have any. ",
        author:"Alice Walker "
    },  
    {
        quote:"I want to taste and glory in each day, and never be afraid to experience pain. ",
        author:"Sylvia Plath "
    },  
    {
        quote:"'If I waited for perfection, I would never write a word. ",
        author:"Margaret Atwood "
    },  
    {
        quote:" How wonderful it is that nobody need wait a single moment before starting to improve the world.",
        author:" Anne Frank"
    },  
    {
        quote:" We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        author:"Aristotle "
    },  
    {
        quote:" If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
        author:"Toni Morrison "
    },  
    {
        quote:" You never have to change anything you got up in the middle of the night to write.",
        author:"Saul Bellow "
    },  
    {
        quote:"Words can be like X-rays if you use them properly -- they'll go through anything. You read and you're pierced. ",
        author:"Aldous Huxley"
    },  
    {
        quote:" We have to continually be jumping off cliffs and developing our wings on the way down.",
        author:"Kurt Vonnegut "
    },  


    {
        quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        author: "Albus Dumbledore"
    },
    {
        quote: "It is impossible to manufacture or imitate love",
        author: "Horace Slughorn"
    },
    {
        quote: "Being different isn't a bad thing. I means that you are brave enough to be yourself.",
        author: "Luna Lovegood"
    },
    {
        quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
        author: "Sirius Black"
    },
    {
        quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
        author: "Arthur Weasley"
    },
    {
        quote: "Every human life is worth the same, and worth saving.",
        author: "Kingsley Shacklebolt"
    },
    {
        quote: "Have a biscuit, Potter.",
        author: "Minerva McGonagall"
    },
    {
        quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        author: "Albus Dumbledore"
    },
    {
        quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
        author: "Dobby"
    }
];

    let btn = document.querySelector(".next-quote");
    let quote = document.querySelector(".quote");
    let author = document.querySelector(".author");


    btn.addEventListener("click",function(){
        let random= Math.floor(Math.random() * quotes.length);
        quote.innerHTML = quotes[random].quote;
        author.innerHTML = quotes[random].author;
    })

   



