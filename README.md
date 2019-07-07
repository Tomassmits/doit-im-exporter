# doit-im-exporter
Exporter for Doit.im

Sick of the [Doit.im](https://doit.im) service? They refuse to provide an export for *your* data. You can use this script to move the data that you own to safety (a local XML file).


# How to use
> These instructions are written for Chrome, but they probably work just as well in other browsers (just different keyboard shortcuts).

Log in to [Doit.im](https://doit.im) using your browser. Create a new filter that includes all your tasks, project, everything. Open this filter (you might need to be patient because the list might be big). Press <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>j</kbd> (<kbd>command</kbd> + <kbd>option</kbd> + <kbd>j</kbd> for Mac) to get to the Developer/Javascript console. Paste the contents of the `doitExport_XML.js` file into the javascript console. If all works well, you now have all your data as now downloaded as an XML file and also in your clipboard.

# Future plans
I had plans to change the output so that it can be imported by proper services like [Todoist](https://todoist.com) but I have chosen to do this manually so there is not going to be a converter/importer from me. Feel free to build one!
