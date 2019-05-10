function createTag(tagLevel, tagName, value)
{
	var result = "";
	
	for( var i = 0; i < tagLevel; i++ )
	{
		result+="\t";
	}
	result += "<"+tagName+">";
	result += value;
	result += "</"+tagName+">\n";

	return result;
}

function createTags( level, obj )
{
	var CDATA_START = "<![CDATA[";
	var CDATA_END = "]]>";
	var result = "";
	for( var key in obj )
	{
		//console.log("key: " + key + " = " + TASKS[130][key] );
		var val = obj[key];
		if( key != "$$hashKey" )
		{	// We don't need the hashkey.
			if( key == "notes" )
			{	// Notes need to be encapsulated in CDATA tags
				val = CDATA_START + obj.notes + CDATA_END;
			}
			
			result += createTag(level, key, val );
		}
	}
	return result;
}

function createTagList( name, startLevel, obj )
{
	var result = "<"+name+"s>\n";
	
	for (var i = 0; i < obj.length; i++)
	{
		var o = obj[i];
		result += "\t<"+name+">\n";
		result += createTags(2, o);

		// Tags
		var tags = o.tags; 
		if (!(typeof tags === 'undefined') && tags.length > 0)
		{
				output += "\t\t<tags>\n";
				for (var j = 0; j < tags.length; j++) {
						output += createTag(3, "tag", tags[j] );
				}
				output += "\t\t</tags>\n";
		}

		result += "\t</"+name+">\n";
	}
	
	result += "</"+name+"s>\n";
	
	return result;
}

function getSettings()
{
	var result = "";
	
	result += "<settings>\n";
	result += createTags(2, Doit.settings);
	result += "</settings>\n";
	
	return result;
}

var output = "";
function writeXML()
{
		output += "<gtd>\n";
		output += getSettings();
		output += createTagList("tag", 1, Doit.tags);
		output += createTagList("task", 1, TASKS);
		output += createTagList("project", 1, Doit.projects);
		output += createTagList("context", 1, Doit.contexts);
		output+="</gtd>\n";

		//console.log(output);
		//fs.write(outputXML, output, 'w');
}


writeXML();

////////////// THIS COPIES DATA TO CLIPBOARD
console.log(output);
copy(output);
/*
////////////// THIS DOWNLOADS DATA AS A FILE
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

var exportFileName = "doitExportDATEHERE.xml";
var now = new Date();
var dateStr =
	now.getFullYear() +
	""+ (now.getMonth()+1+"").padStart(2, "0") +
	""+ (now.getDate()+"").padStart(2, "0");

download(exportFileName.replace("DATEHERE", dateStr), output);
*/
