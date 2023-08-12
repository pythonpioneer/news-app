import { Grid } from '@mui/material';
import React, { useState } from 'react';
import NewsItem from './NewsItem';

/**
 * This componet is used to show the news.
 * @param {string} darkMode - This variable is not used here, only passed to NavItem component.
 * @param {object} colorMode - This object is not used here, only passed to NavItem component.
 * @returns {JSX.Element} - A JSX element shows News.
 */
export default function (props) {

    // state variable to show articles
    const [articles, setArticles] = useState(
        [
            {
                "title": "IND vs WI 4th T20I: विराट कोहली का यह अनोखा रिकॉर्ड तोड़ सकते हैं तिलक वर्मा, बस करना होगा ये काम; यहां देखें आंकड़ें",
                "link": "https://hindi.latestly.com/sports/cricket/ind-vs-wi-4th-%e2%80%8b%e2%80%8bt20i-tilak-verma-can-break-this-unique-record-of-virat-kohli-just-have-to-do-this-work-view-statistics-here-1892224.html",
                "keywords": null,
                "creator": null,
                "video_url": null,
                "description": "बता दें कि टीम इंडिया के युवा बल्लेबाज तिलक सूर्यकुमार यादव के बाद दूसरे भारतीय बल्लेबाज हैं जिन्होंने अपनी पहली 3 टी20 इंटरनेशनल पारियों में से हर मुकाबले में 30+ स्कोर बनाया हो. तिलक वर्मा अपनी अपनी पहली 3 टी20 इंटरनेशनल पारियों में सबसे ज्यादा रन बनाने वाले संयुक्त रूप से दूसरे भारतीय बल्लेबाज बन गए हैं.",
                "content": "मुंबई: टीम इंडिया (Team India) ने वेस्टइंडीज (West Indies) के खिलाफ टी20 सीरीज (T20 Series) के तीसरे मुकाबले में सात विकेट से शानदार जीत दर्ज की. इस जीत के साथ टीम इंडिया अभी भी सीरीज में बरक़रार हैं. टीम इंडिया और वेस्टइंडीज के बीच टी20 सीरीज का चौथा मुकाबला शनिवार यानी 12 अगस्त हो खेला जाएगा. इस मुकाबले में दोनों टीमों के बीच भिड़ंत सेंट्रल ब्रोवार्ड रीजनल पार्क स्टेडियम टर्फ ग्राउंड, लॉडरहिल, फ्लोरिडा (Central Broward Regional Park Stadium Turf Ground, Lauderhill, Florida) में भारतीय समयनुसार शाम 8 बजे से होगी. टीम इंडिया और वेस्टइंडीज क्रिकेट टीम के बीच 5 टी-20 मैचों की सीरीज के आखिरी दो मुकाबले 12 और 13 अगस्त को सेंट्रल ब्रोवार्ड रीजनल पार्क स्टेडियम टर्फ ग्राउंड, फ्लोरिडा में खेला जाएगा. इस दौरान टीम इंडिया के युवा बल्लेबाज तिलक वर्मा के पास एक अनोखा रिकॉर्ड बनाने का सुनहरा मौका होगा. Asia Cup 2023: जल्द हो सकता हैं एशिया कप के लिए टीम इंडिया का एलान, इन दिग्गजों को मिल सकता हैं मौका तिलक वर्मा के पास विराट कोहली का एक अनोखा रिकॉर्ड तोड़ का शानदार अवसर हैं. तिलक वर्मा किसी द्विपक्षीय टी20 इंटरनेशनल सीरीज में सबसे ज्यादा रन बनाने वाले भारतीय बल्लेबाज बन सकते हैं. इसके लिए तिलक वर्मा को 93 रन बनाने पड़ेंगे. तिलक वर्मा ने पहले 3 मुकाबलों में बनाए 139 रन वेस्टइंडीज के खिलाफ पहले मुकाबले में टी20 डेब्यू करने वाले तिलक वर्मा ने सीरीज के पहले 3 मैच में 69.50 की औसत और 139 की स्ट्राइक रेट से 139 रन बनाए हैं. पहले टी20 इंटरनेशनल मुकाबले में तिलक वर्मा ने 22 गेंदों पर 39 रन की पारी खेली. इसके बाद दूसरे मुकाबले में शानदार बल्लेबाजी करते हुए 51 रनों की बेहतरीन पारी खेली. वहीं, तीसरे टी20 इंटरनेशनल मुकाबले में तिलक वर्मा ने 37 गेंदों पर नाबाद 49 रन बनाए थे. इससे पहले टीम इंडिया के स्टार बल्लेबाज कोहली ने मार्च 2021 में इंग्लैंड क्रिकेट टीम के खिलाफ 5 टी20 इंटरनेशनल मैचों की घरेलू सीरीज में 231 रन बनाए थे. टी20 इंटरनेशनल सीरीज में तिलक वर्मा ने बनाए ये रिकॉर्ड बता दें कि टीम इंडिया के युवा बल्लेबाज तिलक सूर्यकुमार यादव के बाद दूसरे भारतीय बल्लेबाज हैं जिन्होंने अपनी पहली 3 टी20 इंटरनेशनल पारियों में से हर मुकाबले में 30+ स्कोर बनाया हो. तिलक वर्मा अपनी अपनी पहली 3 टी20 इंटरनेशनल पारियों में सबसे ज्यादा रन बनाने वाले संयुक्त रूप से दूसरे भारतीय बल्लेबाज बन गए हैं. तिलक वर्मा ने 3 पारियों में 139 रन बनाकर टीम इंडिया के विस्फोटक सूर्यकुमार कुमार की बराबरी कर ली है. इसके अलावा दीपक हुड्डा ने अपनी पहली 3 टी20 इंटरनेशनल पारियों में 172 रन बनाए थे. इस लिस्ट में तीसरे पायदान पर गौतम गंभीर हैं. गौतम गंभीर ने अपनी पहली तीन टी20 इंटरनेशनल पारियों में 109 रन हैं.",
                "pubDate": "2023-08-10 11:05:35",
                "image_url": null,
                "source_id": "latestly",
                "category": ["sports"],
                "country": ["india"],
                "language": "hindi"
            },
            {
                "title": "IND vs WI 4th T20 2023: तिळक वर्मा मोडू शकतो विराट कोहलीचा 'हा' खास विक्रम, फक्त 93 धावा दूर",
                "link": "https://marathi.latestly.com/sports/cricket/tilak-verma-can-break-virat-kohlis-special-ha-record-just-93-runs-away-483376.html",
                "keywords": null,
                "creator": null,
                "video_url": null,
                "description": "तिळक यांने वेस्ट इंडिजविरुद्ध खेळलेल्या तीनही सामन्यांमध्ये 30 हून अधिक धावा केल्या आहेत, त्यात एका अर्धशतकाचाही समावेश आहे. चला जाणून घेऊया कोहलीचा कोणता विक्रम आहे जो तिळक वर्मा मोडू शकतो.",
                "content": "सध्या भारतीय संघ (Team India) वेस्ट इंडिज (IND vs WI) दौऱ्यावर आहे. जिथे भारत यजमानांविरुद्ध पाच सामन्यांची टी-20 मालिका खेळत आहे. त्याचबरोबर या मालिकेतील तीन सामन्यांमध्ये वेगवान फलंदाजी करणाऱ्या तिळक वर्माकडे (Tilak Verma) विराट कोहलीला (Virat Kohli) मागे टाकण्याची सुवर्णसंधी आहे. तिळक यांने वेस्ट इंडिजविरुद्ध खेळलेल्या तीनही सामन्यांमध्ये 30 हून अधिक धावा केल्या आहेत, त्यात एका अर्धशतकाचाही समावेश आहे. चला जाणून घेऊया कोहलीचा कोणता विक्रम आहे जो तिळक वर्मा मोडू शकतो. तिळक वर्माला 93 धावांची गरज आहे तिळक वर्माने वेस्ट इंडिजविरुद्धच्या टी-20 मालिकेतील तीन सामन्यांमध्ये आतापर्यंत 139 धावा केल्या आहेत. यादरम्यान तिळकने पदार्पणाच्या सामन्यात 39, दुसऱ्या सामन्यात 51 आणि तिसऱ्या सामन्यात नाबाद 49 धावा केल्या. आता भारतासाठी द्विपक्षीय टी-20 मालिकेत सर्वाधिक धावा करण्याच्या बाबतीत तिलक वर्मा पाचव्या क्रमांकावर आहे. जर त्याला या यादीत पहिल्या क्रमांकावर यायचे असेल तर या मालिकेतील शेवटच्या दोन सामन्यांमध्ये तिळक वर्माला 93 धावा कराव्या लागतील. असे केल्याने, तो विराट कोहलीला मागे टाकून भारतासाठी द्विपक्षीय टी-20 मालिकेतील नंबर वन फलंदाज बनणार आहे. सध्या विराट कोहली भारतासाठी द्विपक्षीय टी-20 मालिकेत सर्वाधिक धावा करण्याच्या बाबतीत उपस्थित आहे. ज्याने मार्च 2021 मध्ये इंग्लंडविरुद्धच्या टी-20 मालिकेत 231 धावा केल्या होत्या. या यादीत केएल राहुलचे नाव दुसऱ्या क्रमांकावर असताना, राहुलने जानेवारी-फेब्रुवारी 2020 मध्ये न्यूझीलंडविरुद्ध 224 धावा केल्या होत्या. (हे देखील वाचा: पत्नी रितिकासोबत Rohit Sharma त्याच्या 4 कोटींच्या निळ्या 'लॅम्बोर्गिनी'मध्ये मुंबईत दिसला फिरताना, व्हिडिओ झाला व्हायरल ) भारतासाठी द्विपक्षीय टी-20 मालिकेत सर्वाधिक धावा करणारे खेळाडू",
                "pubDate": "2023-08-10 11:03:17",
                "image_url": null,
                "source_id": "latestly",
                "category": ["sports"],
                "country": ["india"],
                "language": "Marathi"
            },
            {
                "title": "Rohit Sharma, India Cricket Team Captain, Highlights Role of ISL in Success of Indian Football",
                "link": "https://www.latestly.com/sports/cricket/rohit-sharma-india-cricket-team-captain-highlights-role-of-isl-in-success-of-indian-football-5330851.html",
                "keywords": null,
                "creator": null,
                "video_url": null,
                "description": "The Indian Football Team has gathered some momentum behind them recently by winning the Intercontinental Cup and the SAFF Championship 2023. A long and exciting football calendar waits for them and fans are further encouraged as the Indian Cricket team himself stands in support of the boom of Indian Football.",
                "content": "Indian Captain Rohit Sharma is currently on break as India take on West Indies in the ongoing T20I series. He led India in the Test series and played one ODI before resting himself in the other two and now he takes some little time off ahead of packed schedule which involves some big events like the Asia Cup 2023 and the ICC Cricket World Cup 2023 where he will lead the Indian cricket team in search of the title. Rohit recently inaugurated his academy in USA. He is well known to be a fan of football. He has openly admitted his support for Real Madrid and visited some games too. Now, he opens up about Indian Football and their current situation. Rohit Sharma and his Wife Ritika Sajdeh Spotted in Lamborghini, Video Goes Viral. According to Times of India, in an event in Mumbai, Rohit revealed his thoughts about the Indian Football team. “They have taken a giant leap in where they are at this moment\", said Rohit. “The ISL has played a huge part in that. The most important thing is for people to get exposure. Even for us in cricket, when the emergence of IPL happened, a lot of our local players got exposure playing with international stars. That is what the leagues in India are doing,” Rohit said during the event. “I would love for them to play against one of the top European teams and go neck-to-neck. Whenever I see them play, they look quite confident. Definitely, they have got a lot of skills as well. It is just about exposure. The more and more exposure they get by playing in Europe and other parts of the world, they are only going to get better,” the Indian skipper signed off. Indian Football Team To Take on Hosts Malaysia in Semifinal of Merdeka Tournament 2023 on October 13. The Indian Football Team has gathered some momentum behind them recently by winning the Intercontinental Cup and the SAFF Championship 2023. They are all set to play the Asian Cup 2023 and also received the clearance to participate in the Asian Games 2023. They will prepare themselves in the King's Cup and the Merdeka Cup. A long and exciting football calendar waits for them and fans are further encouraged as the Indian Cricket team himself stands in support of the boom of Indian Football. (The above story first appeared on LatestLY on Aug 10, 2023 04:22 PM IST. For more news and updates on politics, world, sports, entertainment and lifestyle, log on to our website latestly.com ).",
                "pubDate": "2023-08-10 10:52:00",
                "image_url": null,
                "source_id": "latestly",
                "category": ["sports"],
                "country": ["india"],
                "language": "english"
            },
            {
                "title": "Fire Breakout at Eden Gardens: বিশ্বকাপের আগে সংস্কারের কাজ চলাকালীন ইডেন গার্ডেন্সের ড্রেসিংরুমে আগুন",
                "link": "https://bangla.latestly.com/sports/cricket/fire-breakout-at-eden-gardens-eden-gardens-dressing-room-caught-fire-during-renovation-work-ahead-of-world-cup-234487.html",
                "keywords": null,
                "creator": null,
                "video_url": null,
                "description": "দমকলের দু'টি ইঞ্জিন এসে এক ঘণ্টার চেষ্টায় পরিস্থিতি নিয়ন্ত্রণে আনে তবে, যে ড্রেসিংরুমে ক্রিকেটারদের সরঞ্জাম রাখা ছিল সেখানকার সব জিনিসপত্র পুড়ে যায়",
                "content": "বুধবার গভীর রাতে কলকাতার ইডেন গার্ডেন্সের ড্রেসিংরুমে আগুন লাগে। আগামী ৫ অক্টোবর থেকে শুরু হতে যাওয়া বিশ্বকাপের আগে সংস্কারের কাজ চলাকালীন এই ঘটনা ঘটে। যাঁরা সেখানে কাজ করছিলেন, তাঁরাই প্রথমে আগুনের আঁচ টের পান। সঙ্গে সঙ্গে দমকলকে খবর দেওয়া হয়, পরে দু'টি ইঞ্জিনের স্বল্প প্রচেষ্টায় পরিস্থিতি নিয়ন্ত্রণে আসে। ইন্ডিয়া টুডের খবর অনুসারে, যে ড্রেসিংরুমে ক্রিকেটারদের সরঞ্জাম রাখা ছিল, সেই ড্রেসিংরুমের ফলস সিলিং থেকে আগুন লাগে। ক্ষয়ক্ষতি তেমন না হলেও সেখানে থাকা খেলোয়াড়দের সব জিনিসপত্র পুড়ে যায়। প্রাথমিকভাবে মনে করা হচ্ছে, শর্ট সার্কিট থেকেই আগুন লেগেছে। এদিকে, আসন্ন বিশ্বকাপের দু'মাসেরও কম সময় বাকি থাকতেই এই ঘটনা ইডেন গার্ডেন্সের পরিকাঠামো নিয়ে প্রশ্ন উঠেছে। Greek Football Violence: প্রাণঘাতী ফুটবল হিংসায় জড়িত থাকার অভিযোগে পাঁচ ক্রোয়েশিয়ানকে গ্রেপ্তার গ্রিস পুলিশের আগুন লাগার খবর পেয়েই দমকলে খবর দেন দমকলকর্মীরা। দমকলের দু'টি ইঞ্জিন এসে এক ঘণ্টার চেষ্টায় পরিস্থিতি নিয়ন্ত্রণে আনে। মনে করা হচ্ছে, সংস্কারের কাজে প্রচুর বৈদ্যুতিক সরঞ্জাম ব্যবহার করা হচ্ছে। অস্থায়ী সংযোগের ব্যবস্থা করে কাজ করতে হয়েছে। ক্রিকেট অ্যাসোসিয়েশন অফ বেঙ্গল (সিএবি) সূত্রে জানা গিয়েছে, এই মুহূর্তে স্টেডিয়ামে কোনও সিসিটিভি সংযোগ নেই। বিশ্বকাপের আগে ইডেন গার্ডেন্সে আগুন লাগার খবর প্রকাশ্যে আসতেই ঘটনাস্থলে ছুটে আসেন যুগ্ম সচিব দেবব্রত দাস। কোনও গাফিলতি হয়েছে কি না, তা খতিয়ে দেখা হবে বলে জানিয়েছেন তিনি। 🚨According to reports, the fire broke out in the false ceiling of the dressing room where the equipment of the cricketers were kept 😳 #ODIWorldCup2023 #EdenGardens #India #BCCI #CricketTwitter pic.twitter.com/8UQ5iANo77 — InsideSport (@InsideSportIND) August 10, 2023 আচমকা আগুন লাগার কারণ খতিয়ে দেখা হচ্ছে। বিশ্বকাপ যখন দরজায় কড়া নাড়ছে, তখন জোরকদমে চলছে সংস্কারের কাজ। ১৫ সেপ্টেম্বর এই আইকনিক ভেন্যুর সংস্কারের কাজ শেষ করার টার্গেট। এদিকে আইসিসির প্রতিনিধিরা কাজের অগ্রগতিতে সন্তোষ প্রকাশ করেছেন এবং আগামী মাসে আবার পরিদর্শনে আসবেন। তবে সাম্প্রতিক বিপর্যয় নতুন সমস্যার ইঙ্গিত দিয়েছে। ইডেন গার্ডেন্সের সংস্কারে অগ্নিনির্বাপণ ব্যবস্থাকে গুরুত্ব দেওয়া হয়। যে কোনও ম্যাচের জন্য ফায়ার পারমিট বাধ্যতামূলক। বিশ্বকাপ আয়োজনেও বিষয়টি মাথায় রাখা হয়েছে। আইসিসি ও বোর্ডের যৌথ পরিদর্শন দলকেও জানানো হয়েছে, এখানে আগুন লাগলে কী কী ব্যবস্থা নেওয়া উচিত। কী কী ব্যবস্থা নেওয়া হবে তার রূপরেখাও তুলে ধরা হয়। এটিও জানানো হয় যে ইডেনে তৈরি হচ্ছে নতুন ক্রিকেটারের ড্রেসিংরুম।",
                "pubDate": "2023-08-10 10:48:52",
                "image_url": null,
                "source_id": "latestly",
                "category": ["sports"],
                "country": ["india"],
                "language": "Bengali"
            },
        ]);

    return (
        <>
            <Grid container spacing={4}>

                {/* traversing in all artilcles */}
                {articles.map((element) => {
                    return <Grid item lg={4} xs={12} sm={6} md={4}>
                        <NewsItem

                            // to change color mode
                            darkMode={props.darkMode}
                            colorMode={props.colorMode}

                            // related to API
                            title={element.title}
                            desc={element.description}
                            imageUrl={element.image_url}
                            newsUrl={element.link} />
                    </Grid>
                })}

            </Grid>
        </>
    )
}
