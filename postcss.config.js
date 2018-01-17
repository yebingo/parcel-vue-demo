module.exports = {
	plugins: [
		require('autoprefixer')({
			browsers: ['last 20 versions', 'IE 9', 'iOS >= 8']
        }),
        require('postcss-px2rem')({
            "baseDpr": 1,
            "remUnit": 37.5,
            "forcePxComment": "!px",
            "keepComment": "!no"
        }),
	]
};
