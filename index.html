const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADTUlEQVRIS63VTWgUZxgH8P+7Mzsf+2U2SrPJKBoEA1WKUMzupaKHpgoetadCnaBN9FRaLLRQEW17KKIed1V21dJLbU/FRqiixx219NDaVi+NmnWNZT+cze7Ozsf7yoxEYpnMRJI5DQzP+5v3P8/7DEHANVHM7iXAVyAkwQCNgZYjDp3KH7jzZ1DdwmckBLirrE29KQgcTNOBZTrQdYP2es631LSPnp34zQqDlgTIcvTlOowxNBsG6o3uHw6he899eOt+EBIGeBHxUW5ElDjEYwKSKdFbzzAsVB61/q4lWlsvv3/XXAwJBOaL9pe29slE3MgoOSHF+N0DAwnwfASNehe1WudkYVw7sixgYfFkMXtSikU/VZQU3LhmHjVZ17Sz59Tbt/2QJe3glUIGMnEhe3PgjcR2Ny5dN/Df0873ebX8gS/wshUBUMK+PKveuhzWGZPF0fdiceHq4FAK3a6FyoyuFca13GKA14ruw8qM/ldhXNscBnz03duDUSY83jCchu04ePBvs5ZXtTW+wGQpW12/IZ1xP9r0dAM9g2bOH9Rmg5DDpW0ZwvFVD7CpW1ctqNqQP1DM/ZJRErvdFqw+bqHdMccKqvZr4AEsbdsVj4lTbkTttolqtXWloGp7FtlB7uv+1fIX6bSM9pyJJ9W5a3m1PAYC5ou4H7mUvT44mNwZTwio17to1Dsn8qp21Bc4cGl0WCLcP+vW9wkRQrxddNrW6cyw9NmxnTfthUX7ftgs9LcTP8dkfmxIWeW16cOHTdO22EheLU8v2qYTxezn6bT8zeo1MS/T2dk5GB3rHgNOMd6+SsFxnE3eJcAnohwdUZQkQAjqtTYadePHwri2L/CgHbuxg3/ywPhdUZJbJOnF3GnpPS9fw7ABAkgij3h8flS46REYPRvVig5KoebV8oXAg3bw4ugmjkV+6u+Xt/T1SSDE/wy6sTxrdiHHBYgCH4q8ssqLjOPHZYk/kkiKEUHg4Y5qBgbLpDBNG62W5Rhde4rjsGdISUEUgxHf1zx0MfsWdTBGCHIAeQeABbAyBdPmfziTpdz+SASlMOT1Z9GCoJeCLAtwrTBk2UAYsiKAH+JN2YreXDHg/wilzJ3Oz1YUmEcYY2fce0LIx88BFi6vvp70RPYAAAAASUVORK5CYII=";

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
                    blockType: BlockType.REPORTER,
                    text: 'Get Browser Name',
                },
				{
					blockType: BlockType.REPORTER,
					text: 'StoreCount',
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

		const StoreCountPromise = new Promise(resolve => {
			nets({
				//url: 'http://localhost:8080/services/pedometer/data/step',
				url: 'https://cors-anywhere.herokuapp.com/http://localhost:8080/services/thing/status/system',
				timeout: serverTimeoutMs
			}, (err, res, body) => {
				if (err) {
					log.warn(`get response fail`);
					resolve('');
					return '';
				}
				console.log("body")
				console.log(body)
				return "0";
			});

		});
	}
	
	getforecast (){
		  const url = new URL("https://cors-anywhere.herokuapp.com/http://localhost:8080/services/thing/status/system");
/*
		  return fetch(url).then(res => {
			if (res.ok) {
			  res.json().then(json => {
				console.log("res")
				console.log(res)
			  });
			}
		  });
		  */
		  fetch("https://cors-anywhere.herokuapp.com/http://localhost:8080/services/thing/status/system")
			.then(function(response) {
			// 處理 response
			}).catch(function(err) {
			// 錯誤處理
			});
	}
	
	test() {
		const Http = new XMLHttpRequest();
		const url = '"https://cors-anywhere.herokuapp.com/http://localhost:8601/services/thing/status/system';
		Http.open("GET",url);
		Http.send();
		
		Http.onreadystatechange=(e)=>{
			console.log(Http.responseText)
		}
	}
	
	
}
Scratch.extensions.register(new Utilities());