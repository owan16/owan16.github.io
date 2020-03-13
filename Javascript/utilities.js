/**
 * How long to wait in ms before timing out requests to translate server.
 * @type {int}
 */
const serverTimeoutMs = 10000; // 10 seconds (chosen arbitrarily).

class Utilities {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'utilities',
            name: 'Browser Information',
            blocks: [
                {
		    opcode: 'getStoreCount',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'getStoreCount',
                },
		{
			opcode: 'test',
			blockType: Scratch.BlockType.REPORTER,
			text: 'getforecast',
		},
		{
			opcode: 'fuck',
			blockType: Scratch.BlockType.REPORTER,
			text: 'test',
		},
		{
			opcode: 'postmethod',
			blockType: Scratch.BlockType.REPORTER,
			text: 'postmethod',
		}
            ],
        }
    }

    getBrowserName() {
        return navigator.appVersion;
    }


	/**
	 * Get the Store Count.
	 * @return {number} - the Store Count.
	 */
	getStoreCount() {
			fetch('http://localhost:8080/services/pedometer/data/step')
			.then(function(response) {
			// 處理 response
			}).catch(function(err) {
			// 錯誤處理
			});
// 		const StoreCountPromise = new Promise(resolve => {
// 			nets({
// 				//url: 'http://localhost:8080/services/pedometer/data/step',
// 				url: 'https://cors-anywhere.herokuapp.com/http://localhost:8080/services/thing/status/system',
// 				timeout: serverTimeoutMs
// 			}, (err, res, body) => {
// 				if (err) {
// 					log.warn(`get response fail`);
// 					resolve('');
// 					return '';
// 				}
// 				console.log("body")
// 				console.log(body)
// 				return "0";
// 			});

// 		});
	}
	
	test() {
		const Http = new XMLHttpRequest();
		const url = 'https://cors-anywhere.herokuapp.com/http://127.0.0.1:8080/services/pedometer/data/ax';
		Http.open("GET",url);
		Http.send();
		
		Http.onreadystatechange=(e)=>{
			console.log(Http.responseText)
		}
	}
	
	postmethod() {
		// find elements
		var $ = jQuery;
		var result = $(".result");

		$.ajax({
		 type: 'GET',
		    url: 'https://cors-anywhere.herokuapp.com/http://127.0.0.1:8080/services/pedometer/data/ax',
		    dataType: 'jsonp',
		    jsonp: 'callback',
		    success: (data) => {
			
			
            },
            err: (textStatus, errorThrown) => {
                console.log(textStatus);
                console.log(errorThrown);
                status = 0;
                msg = "ERROR";
            },
		});
		 
  
	}
	
	fuck() {
// 		$.ajax({
//             type: 'GET',
//             url: 'https://cors-anywhere.herokuapp.com/http://localhost:8080/services/thing/status/system',
//             dataType: 'jsonp',
//             jsonp: 'callback',
//             success: (data) => {
//                 var obj = JSON.parse(data);
//                 if (obj.status === "READY") {
//                     status = 2;
//                 } else {
//                     status = 1;
//                 }
//                 msg = obj.status;
//             },
//             err: (textStatus, errorThrown) => {
//                 console.log(textStatus);
//                 console.log(errorThrown);
//                 status = 0;
//                 msg = "ERROR";
//             },
//         });
	fetch('https://cors-anywhere.herokuapp.com/http://127.0.0.1:8080/services/pedometer/data/ax', {method: 'get'})
	.then(function(response) {
	    //處理 response
		console.log("test")
		console.log(response)
	}).catch(function(err) {
	    // Error :(
	})
	}
	
	
}
Scratch.extensions.register(new Utilities());
