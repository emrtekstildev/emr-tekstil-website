import React from "react";

export const langs = {
    TR:{
        projectName:"EMR Tekstil",
        error:"Hata Oluştu!",
        errorMessage:"Bir Hata Oluştu!",
        headerText:"EMR TEKSTİL KALİTENİN ADI!",
        footerText:"KALİTENİN ADI",
        test:"bu mesaj testtir!",
        home:"Anasayfa",
        about:"Hakkımızda",
        contact:"İletişim",
        bannerText:"KALİTENİN ADI EMR TEKSTİL!",
        nextSecHead:"Modern İş Süreci",
        ourCritera:"Müşteri Memnuniyeti",
        investmentProcces:"Ürün Kalitesi",
        application:"Bizimle İletişime Geçin",
        preScanning:"Ön Görüşme",
        firstMeet:"İlk Toplantı",
        investment:"Yatırım",
        applyTitle:"EMR Tekstil kalitesine sahip olmak istiyorsanız, bizimle iletişime geçin.",
        applyText:"",
        email:"E-mail",
        applyBtn:"İletişim",
        phoneNumber:"Telefon Numarası",
        address:"Adres",
        successMessage:"Başvurunuz Başarıyla Gönderildi!",
        aboutText:" 2021 kuruluş tarihli EMR Tekstil kısa sürede yaygın müşteri potansiyeline ulaşmıştır. Bulgaristan, Yunanistan, Romanya, Kosava gibi ülkelere bayan tekstil ürünleri ihraç etmektedir. Genç, dinamik ve kendine güvenen ekibimiz ile sizin için profesyonel işler çıkartmaktayız.",
        modernText:"Modern tekstil sektörü ile uyumlu çalışmalarımızla her zaman bir adım öndeyiz. Her aşamada müşteri memnuniyetini ve sürdürülebilir kaliteyi benimseyen firmamız, tekstil sektörüne yenilikler katarak, günün modasına uygun, doğayla uyumlu ve insan sağlığını ön planda tutan ürünler üretmeye devam ediyor.",
        customerText:"Müşteri memnuniyeti prensiplerimizin başında gelmektedir. Müşterilerimize sunacağımız ürün, kalite ve konfora sahip olmak istiyorsanız bizimle iletişime geçin. Sizin mutluğuğunuz, mutluğumuzun sebebi.",
        productText:"Ürün kalitemiz dünya standartlarında ve zevkinize uygun! Müşterilerimize sunduğumuz kaliteli ürün ve hizmetler sayesinde dünyanın önde gelen tekstil markaları ile rekabet edebilecek ürünler üretiyoruz."


    },
    EN:{
        productText:"Our product quality is at world standards, in harmony with your taste!Thanks to the high quality products and services we offer to our customers, we produce products that can compete with the world's leading textile brands.",
        modernText:"We are always one step ahead with our work in harmony with the modern textile industry. Our company, which adopts customer satisfaction and sustainable quality at every stage, will continue to produce products that are compatible with the fashion of the day, in harmony with nature and prioritizing human health, by adding innovations to the textile industry. ",
        customerText:"Customer satisfaction is at the forefront of our principles. If you want to have the product, quality and comfort we will offer to our customers, contact us. Your happiness is the reason for our happiness.",
        projectName:"EMR Tekstil",
        error:"Error!",
        errorMessage:"An Error Occurred!",
        headerText:"EMR TEXTILE NAME OF QUALITY!",
        footerText:"NAME OF QUALITY",
        test:"This message is a test!",
        home:"Home",
        about:"About",
        contact:"Contact",
        bannerText:"NAME OF QUALITY EMR TEKSTIL!",
        nextSecHead:"Modern Business Process",
        ourCritera:"Customer Happiness",
        investmentProcces:"Product Quality",
        application:"Contact Us",
        preScanning:"Pre-Scanning",
        firstMeet:"First Meeting",
        investment:"Investment",
        applyTitle:"If you want to have EMR Tekstil quality, contact us.",
        applyText:"",
        applyBtn:"Contact",
        email:"E-mail",
        nameSurname:"Name Surname",
        phone:"Phone Number",
        message:"Message",
        file:"File",
        send:"Send",
        phoneNumber:"Phone Number",
        address:"Address",
        successMessage:"Your application has been sent successfully!",
        aboutText:"EMR Tekstil, which was founded in 2021, has reached widespread customer potential in a short time. It exports women's textile products to countries such as Bulgaria, Greece, Romania and Kosovo. We produce professional works for you with our young, dynamic and self-confident team."
    }
}

const LangContext = React.createContext(langs.en);
export default LangContext;