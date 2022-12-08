import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jennifer Hansler",
            "title": "Exclusive: Paul Whelan tells CNN he is 'disappointed' Biden administration has not done more to secure his release - CNN",
            "description": "Detained American Paul Whelan expressed his frustration that more has not been done to secure his release in an exclusive CNN interview hours after another detained American, Brittney Griner, was freed.",
            "url": "https://www.cnn.com/2022/12/08/politics/paul-whelan-cnn-interview-brittney-griner/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221208125838-paul-whelan-file-082319.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-12-08T18:30:00Z",
            "content": "Detained American Paul Whelan expressed his frustration that more has not been done to secure his release in an exclusive CNN interview hours after another detained American, Brittney Griner, was fre… [+4913 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Jon Gambrell",
            "title": "Iran executes first known prisoner arrested in protests - The Associated Press - en Español",
            "description": "DUBAI, United Arab Emirates (AP) — Iran said Thursday it executed a prisoner convicted for a crime allegedly committed during the country's ongoing nationwide protests, the first such death penalty carried out by Tehran.",
            "url": "https://apnews.com/article/iran-crime-tehran-59d4b028bbd402a642b83fdddc35fdc8",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/b9b072827dd942b4a3774d8684dc9e01/3000.jpeg",
            "publishedAt": "2022-12-08T17:40:18Z",
            "content": "DUBAI, United Arab Emirates (AP) Iran said Thursday it executed a prisoner convicted for a crime allegedly committed during the countrys ongoing nationwide protests, the first such death penalty carr… [+4177 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Danica Kirka",
            "title": "Harry and Meghan slam British tabloids in new Netflix series - The Associated Press",
            "description": "LONDON (AP) — Prince Harry and his wife, Meghan, stick to a familiar script in a new Netflix series that chronicles the couple’s estrangement from the royal family, chastising Britain’s media and the societal racism they believe has fueled coverage of their r…",
            "url": "https://apnews.com/article/king-charles-iii-princess-diana-meghan-markle-prince-harry-royalty-0f1fb22ed38f77b99970e7739ac52f98",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/09e2cee3b00e4919b60577c3878faa60/3000.jpeg",
            "publishedAt": "2022-12-08T17:15:58Z",
            "content": "LONDON (AP) Prince Harry and his wife, Meghan, stick to a familiar script in a new Netflix series that chronicles the couples estrangement from the royal family, chastising Britains media and the soc… [+6495 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Emily Shapiro",
            "title": "'Boy in the box': Victim finally ID'd in Philadelphia's oldest homicide case - ABC News",
            "description": "The little boy's body was found in a box in February 1957.",
            "url": "https://abcnews.go.com/US/boy-box-victim-finally-idd-philadelphias-oldest-homicide/story?id=94687156",
            "urlToImage": "https://s.abcnews.com/images/US/philadelphia-police-press-WPVI-lv-221208-main_1670518597272_hpMain_16x9_992.jpg",
            "publishedAt": "2022-12-08T17:03:45Z",
            "content": "A little boy killed more than 60 years ago has finally been identified thanks to police work and DNA analysis, the Philadelphia Police Department said.\r\nThe case, known as \"the boy in the box,\" is Ph… [+1883 chars]"
        }
      ]
    constructor(){
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row"> 
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc" imageUrl="https://storage.googleapis.com/afs-prod/media/b9b072827dd942b4a3774d8684dc9e01/3000.jpeg" newsUrl="TODO"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc"/>
                    </div> 
                </div> 
            </div>
        )
    }
}

export default News