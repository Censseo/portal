
$(document).ready(function () {
     GetLatestRealaseInfo();  
});  


function GetLatestRealaseInfo() {
	function compareToGithubVersion(localeVersion){
        	var latestVersion;
		var downloadURL;
		$.getJSON("https://api.github.com/repos/slobberbone/portal/tags").done(function(dataFromGithub){
			return dataFromGithub;
		}).then(function(lastRealase){
			latestVersion = lastRealase[0].name;
			var portalDownloadId = document.getElementById("portal-download");
			var portalDownloadImgId = document.getElementById("portal-download-img");
			var portalDownloadLinkId = document.getElementById("portal-download-link");
			portalDownloadLinkId.href=lastRealase[0].zipball_url;
			portalDownloadId.style.display="none";
			portalDownloadImgId.style.display="none";
			if(!localeVersion){
				localeVersion = "0.1";
			}
			if(latestVersion){
				if(localeVersion < latestVersion){
					portalDownloadId.style.display="block";
					portalDownloadImgId.style.display="block";
				}
			}
		
			return true;
		});
	}
	$.getJSON( "config/config.sample.json").done(function(json) {
		compareToGithubVersion(json["version"]);
	});
}
