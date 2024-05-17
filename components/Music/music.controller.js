const _ = require('lodash');

const getMusicData = async (req, res, next) => {
    try {
        console.log('call api music data');
        const { musicId } = req.params;

        const data = {
            id: 'music1',
            title: 'As You Were - TrackTribe',
            artist: 'TrackTribe',
            thumbnail: `${process.env.DOMAIN}/images/img01.jpg`,
            src: `${process.env.DOMAIN}/images/sample4.m4a`
        };

        const response = {
            code: 1001,
            message: 'Get data failed'
        }

        // if (data.id === Number(musicId)) {
        response.code = 1000;
        response.message = 'Get data successfully'
        response.data = data;
        // }


        res.status(200).json({
            ...response
        });
    } catch (error) {
        console.log(`[ERROR] get music data  failed: ${error.message}`)
    }
}

module.exports = {
    getMusicData
};
