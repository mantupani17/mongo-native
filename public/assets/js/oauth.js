var Oauth = (function(window, document){
    return {
        popup: function(url , cb){
            var winObj = window.open(url, '_blank', 'width=700,height=500,left=200,top=100');
            return cb(null, winObj);
        },
        request: function(data, cb){
            var xhttp = new XMLHttpRequest();
            var queryString = '';
            var i = 0;
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    var val = data[key];
                    if( i === 0){
                        queryString += key+'='+val;
                        i++;
                    }else{
                        queryString += '&'+key+'='+val;
                    }
                }
            }

            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    cb(null, JSON.parse(this.response))
                }else{
                    cb(new Error('Unable to process the request'), null)
                }
            };
            
            xhttp.open("POST", "http://localhost:5021/api/feedbacks/twitter_requests", true);

            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            xhttp.send(queryString);
        },
        getReqToken: function(cb){
            this.request({type:'request_token',callbackUrl: location.href},function(err, response){
                if(response && response.data && response.data.authtenticate_url){
                    return cb(null, response.data.authtenticate_url);
                }else{
                    return cb(new Error('Sorry, unable to process the request token details.'), null);
                }
            });
        },
        getAccToken: function(data, cb){
            this.request(data,function(err, response){
                if(response && response.data){
                    return cb(null, response);
                }else{
                    return cb(new Error('Sorry, unable to process the access token details.'), null);
                }
            });
        },
        getParameterByName: function(name) {
            var url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return '';
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        },
    }

    
})(window, document)