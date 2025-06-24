const buttons = document.querySelectorAll(".card button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const card = button.closest(".card");
        const details = card.querySelector(".detailsHidden");
        
        details.classList.toggle("show");

        if (details.classList.contains("show")) {
            button.textContent = "Show less";
        }
        else {
            button.textContent = "Learn more...";
        }
    });
});


const langSwitch = document.querySelector(".langSwitch");
let isEnglish = true;

const cardsData = [
    {
    en: {
      title: "Rainbow",
      desc: "A colorful arc that appears in the sky when sunlight shines through rain droplets.",
      more: "A rainbow is an optical phenomenon that occurs when sunlight passes through raindrops in the atmosphere. The light is refracted (bent), reflected inside the droplets, and then dispersed into different colors. This creates a multicolored arc across the sky. Rainbows are usually seen when the sun is behind the viewer and rain is falling in the opposite direction."
    },
    he: {
      title: "קשת בענן",
      desc: "קשת צבעונית בשמיים הנוצרת כאשר אור עובר דרך טיפות גשם.",
      more: "קשת בענן היא תופעה אופטית שמתרחשת כאשר אור השמש עובר דרך טיפות גשם באטמוספירה. האור נשבר, מוחזר ומתפזר לצבעים שונים ויוצר קשת מרהיבה."
    }
  },
  {
    en: {
      title: "Volcanic Eruption",
      desc: "An explosive burst of lava, ash, and gases from inside the Earth.",
      more: "Volcanic eruptions happen when pressure builds up beneath the Earth's surface and molten rock (magma), gases, and ash are released through a volcano. These eruptions can be gentle or explosive and can shape entire landscapes. They also release nutrients into the soil but can be dangerous to people, animals, and the climate."
    },
    he: {
      title: "התפרצות געשית",
      desc: "התפרצות פתאומית של לבה, אפר וגזים ממעמקי האדמה.",
      more: "התפרצויות געשיות קורות כאשר לחץ מצטבר מתחת לפני הקרקע ודוחף לבה, גזים ואפר החוצה מהר געש. תופעה זו עלולה להיות מסוכנת אך גם יוצרת נופים חדשים."
      }
    },
    {
    en: {
      title: "Snow in the Desert",
      desc: "A rare and surprising sight of snow covering hot, arid landscapes.",
      more: "Snowfall in desert regions is a rare phenomenon due to the typically hot and dry climate. However, when temperatures drop unusually low and there's enough moisture in the air, snow can fall even in deserts like the Sahara. These events are brief but create breathtaking and unusual scenery."
    },
    he: {
      title: "שלג במדבר",
      desc: "מראה נדיר ומפתיע של שלג המכסה נוף חם וצחיח.",
      more: "שלג במדבר הוא תופעה נדירה שמתרחשת כאשר הטמפרטורות יורדות בצורה קיצונית ויש מספיק לחות באוויר. שלג כזה עשוי להופיע גם במדבר סהרה, וליצור מראה עוצר נשימה אך זמני."
    }
  },
  {
    en: {
      title: "Tornado",
      desc: "A fast-spinning column of air that touches both the ground and a storm cloud.",
      more: "A tornado is a rapidly rotating column of air that extends from a thunderstorm to the ground. It forms when warm, moist air collides with cold, dry air, creating instability in the atmosphere. Tornadoes can cause severe damage with strong winds, often destroying buildings and trees along their path."
    },
    he: {
      title: "טורנדו",
      desc: "עמוד אוויר מסתובב במהירות המחבר בין הקרקע לענן סערה.",
      more: "טורנדו הוא עמוד אוויר סוער ומסתובב הנוצר ממפגש בין אוויר חם ולח לאוויר קר ויבש. התוצאה היא מערבולת עוצמתית שעלולה לגרום נזק רב למבנים, עצים ולתשתיות."
    }
  },
  {
    en: {
      title: "Tsunami",
      desc: "Massive ocean waves triggered by underwater earthquakes or eruptions.",
      more: "A tsunami is a series of huge sea waves caused by underwater disturbances such as earthquakes, volcanic eruptions, or landslides. The waves can travel across oceans at high speeds and become extremely tall and destructive when they reach the shore. Tsunamis can flood coastal areas and cause major loss of life and property."
    },
    he: {
      title: "צונאמי",
      desc: "גלי ים אדירים הנגרמים מרעידות אדמה תת-ימיות או התפרצויות.",
      more: "צונאמי הוא סדרת גלים עצומים שנוצרים כתוצאה מרעידות אדמה, מפולות תת-ימיות או התפרצויות געשיות. הגלים נעים במהירות רבה ועשויים לגרום להצפות הרסניות כאשר הם פוגעים בחופים."
    }
  },
  {
    en: {
      title: "Northern Lights (Aurora Borealis)",
      desc: "Shimmering lights dancing across polar skies caused by solar particles.",
      more: "The Northern Lights, or Aurora Borealis, occur when charged particles from the sun collide with gases in Earth’s upper atmosphere near the magnetic poles. These interactions create glowing lights that dance in the sky, typically in green, pink, and purple shades. They are best seen in high-latitude regions during the winter."
    },
    he: {
      title: "זוהר צפוני (אורורה)",
      desc: "אורות מרהיבים מרקדים בשמיים הקוטביים כתוצאה מחלקיקים מהשמש.",
      more: "הזוהר הצפוני מופיע כאשר חלקיקים טעונים מהשמש פוגעים בגזים שבאטמוספירה העליונה ליד הקטבים המגנטיים. הפגיעה יוצרת אורות זוהרים שמרקדים בשמיים בצבעים ירוק, ורוד וסגול."
    }
  },
  {
    en: {
      title: "Sandstorm",
      desc: "Powerful winds that lift sand or dust into the air, reducing visibility.",
      more: "A sandstorm (or dust storm) happens when strong winds blow loose sand and dust from the ground into the air. These storms are common in arid and semi-arid regions and can reduce visibility, affect breathing, and damage electronics. Some sandstorms can travel thousands of kilometers across continents."
    },
    he: {
      title: "סופת חול",
      desc: "רוחות עזות שמרימות חול ואבק לאוויר ומפחיתות את הראות.",
      more: "סופות חול מתרחשות כאשר רוחות חזקות מעיפות גרגרי חול ואבק לאוויר. הן נפוצות באזורים צחיחים ועלולות לפגוע בבריאות, בהנראות ובציוד אלקטרוני."
    }
  },
  {
    en: {
      title: "Meteor Strike",
      desc: "A bright streak across the sky as a space rock enters Earth's atmosphere.",
      more: "When a meteoroid from space enters Earth’s atmosphere, it burns up due to friction with the air, creating a bright streak of light known as a meteor. If a large piece survives the journey and lands on Earth, it’s called a meteorite. Meteors are often seen during showers when many pass through the sky in a short time."
    },
    he: {
      title: "פגיעת מטאור",
      desc: "קו אור בהיר בשמיים כאשר סלע חלל נכנס לאטמוספירה.",
      more: "מטאור הוא סלע מהחלל שנכנס לאטמוספירה ונשרף תוך יצירת הבזק אור. אם חלק ממנו שורד ופוגע בקרקע, הוא נקרא מטאוריט. לעיתים ניתן לראות מטרים של מטאורים הנעים בקבוצות בשמי הלילה."
    }
  }
]
  
  langSwitch.addEventListener("click", () => {
      isEnglish = !isEnglish;
      updateLanguage();
});

function updateLanguage() {

    langSwitch.textContent = isEnglish ? "עברית" : "English";

    document.querySelector(".intro h1").textContent = isEnglish
      ? "Welcome to a Journey Through Nature!"
      : "ברוכים הבאים למסע בטבע";
    
    document.querySelector(".intro p").textContent = isEnglish
      ? "Here on Earth – the beautiful planet we call home – nature unfolds in stunning and mysterious ways. Come explore, learn, and be amazed by some of the most incredible natural phenomena happening all around us."
      : "כאן, על פני כדור הארץ – הכוכב היפהפה שאנו קוראים לו בית – מתרחשות תופעות טבע מרהיבות ומסתוריות. בואו לגלות, להבין ולהתרגש מכמה מהתופעות המדהימות ביותר שמתרחשות סביבנו בכל יום";
    
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
      const lang = isEnglish ? "en" : "he";
      const data = cardsData[index];
      card.querySelector("h2").textContent = data[lang].title;
      card.querySelectorAll("p")[0].textContent = data[lang].desc;
      card.querySelector(".detailsHidden p").textContent = data[lang].more;
      const btn = card.querySelector("button");
      if (!card.querySelector(".detailsHidden").classList.contains("Show")) {
          btn.textContent = isEnglish ? "Learn more..." : "למד עוד...";
      }  else { 
          btn.textContent = isEnglish ? "Show less" : "הסתר";
      }
    });

    document.querySelector(".backToTop").textContent = isEnglish ? "top ↑" : "↑ למעלה";

}