export default {
    name: 'propertyImage',
    title: 'property Image',
    type: 'image',
    fields:[
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',  
            options :{
                isHightLight: true
            }
        },
    ],
    options: {
        hotspot : true
    }
}