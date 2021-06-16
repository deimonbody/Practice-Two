export default function findPath(obj) {
	let result = false;
	for (let key in obj) {
        if(obj[key] === 15) return key  
		if (typeof obj[key] === 'object') {
			if ( (result = findPath(obj[key])) ){
			    result = key + '.' + result
			}   
		}; 
	};
	return result ? result : null;
};

