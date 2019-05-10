# doit-im-exporter
Exporter for Doit.im

Sick of the bad quality of the [Doit.im](https://doit.im) service? Then use this script to export.


# How to use
> These instructions are written for Chrome, but they probably work just as well in other browsers.

Log in to [Doit.im](https://doit.im) using your browser. Create a new filter that includes all your tasks, project, everything. Open this filter (you might need to be patient because the list might be big). Press <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>j</kbd> to get to the Developer/Javascript console. Paste the contents of the `doitExport_XML.js` file into the javascript console. If all works well, you now have all your data as XML in your clipboard. Paste this into any texteditor and you're done!

# Future plans
I had plans to change the output so that it can be imported by proper services like [Todoist](https://todoist.com) but Doit.im currently has a bug (that they are not fixing!) where I cannot login on a browser anymore. 
