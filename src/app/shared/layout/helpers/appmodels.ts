export interface appModel{
   
    app :{
        nameEn:"E-Services",
        nameAr:"الخدمات الإلكترونية",
        description:{
            nameEn: 'Media Regulatory Office at Ministry of Culture and Youth',
                    nameAr: "مكتب تنظيم الإعلام بوزارة الثقافة والشباب"
        },
        description_old: {
            nameEn: 'Ministry of Culture and Youth',
            nameAr: "وزارة الثقافة والشباب"
        },
        layout: {
            isRTL: false
        },
        httpSource: 'http://localhost:1113/',
        edirhamRoute: 'https://g2testi.edirhamg2.ae/PaymentRouter/AcceptRedirectRequestServlet',
        googleMapsUrl: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCTn2DYylyRb1QGSZMTqyHjkofTnDSPfbE',
        isPMOHappiness: false        
    };        
}