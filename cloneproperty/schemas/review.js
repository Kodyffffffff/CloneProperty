export default {

    name: 'review',
    title: 'Review',
    type: 'object',
    fields: [
        {
            name: 'reviewDescription',
            title: 'reviewDescription',
            type: 'string',
        },
        {
            name: 'traveller',
            title: 'Traveller',
            type: 'traveller',
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'string',
            options: {
                list : [
                   {title: '5 Starts', value: '5-starts'},
                   {title: '4 Starts', value: '4-starts'},{title: '3 Starts', value: '3-starts'},{title: '2 Starts', value: '2-starts'},{title: '1 Starts', value: '1-starts'},
                ],
                layout: 'radio'
            }

        }
    ]


}