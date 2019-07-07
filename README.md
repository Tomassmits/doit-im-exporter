# An XML exporter for your Doit.im data.

Sick of the [Doit.im](https://doit.im) service? They refuse to provide an export for *your* data. You can use this script to move the data that you own to safety (a local XML file).


# How to use
> These instructions are written for Chrome, but they probably work just as well in other browsers (just different keyboard shortcuts).

## Create a filter that includes all your tasks, project, everything.
Log in to [Doit.im](https://doit.im) using your browser. 
Click on the "Search" icon on the top right

![Click Search Icon](docs/instruction1.png?raw=true "Click Search Icon")

Now without setting any filter parameters, click "Save as a Filter":
![Save as a Filter](docs/instruction2.png?raw=true "Save as a Filter")

Now give your new filter a name (e.g. "All Tasks").

## Open a list of all tasks
At the left bar, under `Filters`, you will find the filter you've just created. Open this filter. You might need to be patient because the list might be big.

## Export all these tasks
Press <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>j</kbd> (<kbd>command</kbd> + <kbd>option</kbd> + <kbd>j</kbd> for Mac) to get to the Developer/Javascript console. Paste the contents of the `doitExport_XML.js` file into the javascript console. If all works well, you now have all your data as now downloaded as an XML file and also in your clipboard.

## Repeat the export
If you want to repeat the export, you can re-use a previously created filter.

# Future plans
I had plans to change the output so that it can be imported by proper services like [Todoist](https://todoist.com) but I have chosen to do this manually so there is not going to be a converter/importer from me. Feel free to build one!
