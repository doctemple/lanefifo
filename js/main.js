var _self   = window.location.origin;

function _Get(param)
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = decodeURIComponent(hash[1]);
    }
    return vars[param];
}

var ip='192.168.20.248';
//var ip='localhost';

// Web
var webserver ='192.168.20.125/fifo/';

// Monitor
var apiserver =ip;

// SR
var api_fifo_sr =apiserver+':91';

// BP
var api_fifo_bp =apiserver+':92'; // Not API

var api_was_bp =apiserver+':94';

// GW
var api_fifo_gw =apiserver+':92';
var api_was_gw =apiserver+':93';