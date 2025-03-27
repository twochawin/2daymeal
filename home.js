document.getElementById("generateBtn").addEventListener("click", function() {


    const genre = document.getElementById("genreSelect").value;


    const wordLists = {
        Noodles: ["สยามสุกี้", "Two days", "หยวน", "ก๋วยเตี๋ยวร้านเหลือง", "ก๋วยเตี๋ยวคุณยาย", "ก๋วยเตี๋ยวร้านเขียว", "ก๋วยเตี๋ยวไข่หวาน", "สดชื่น", "โอบัง", "เกาหลีศรีชุม", "ราเม็งซอยติมปัง", "หม่ำ", "Tomorrow"
            , "หมี่เกี๊ยว กองต้า", "ขนมจีนครัวมุกดา", "ไก่โดนต้ม"],
        Kabkhaow: ["สยามสุกี้", "Two days", "Mcdonald", "ข้างหยวน", "ร้านภูผาแฟนอิ๊บ", "สดชื่น", "โอบัง", "เกาหลีศรีชุม", "ส้มตำปูม้าเจ็ดยอด", "ลัคซีน", "Tomorrow", "At one กาดกองต้า",
             "เนื้อน้ำมันหอย เทพรส", "ไก่โดนต้ม", "โคตรกระเพรา","หยวน","KFC"],
        Desserts: ["สดชื่น", "ติมปัง", "Moei", "Tomorrow", "เครปฝรั่งเศส", "Swensens","Blueberry"]
    };
    const selectedList = wordLists[genre];


    const randomIndex = Math.floor(Math.random() * selectedList.length);


    const randomWord = selectedList[randomIndex];


    document.getElementById("randomWord").textContent = randomWord;

    
});