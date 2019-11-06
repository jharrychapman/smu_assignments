# Week 11-Web 
## Objectives
* Gain a high-level understanding of HTML, CSS, and JavaScript and what their roles are when creating websites.
* Understand the basic parts of an HTML web page and how to create one from scratch.
* Learn to cover and utilize some of the most common HTML tags and selectors.
* Understand how to deploy HTML webpages to the internet using GitHub Pages.
* Understand the basics of CSS styling.
* Position HTML elements on a webpage using CSS.
* Be able to discuss media queries, the technology that is used to create the responsive Bootstrap grid.
* Understand the Bootstrap Grid and discover how to utilize it to position the elements on the page.
* Discover how to quickly and easily build web pages using pre-built Bootstrap components.

### What's the relevance of using web technologies like HTML and CSS?
Learning these web technologies teaches us an entirely new way to present our data: in a beautiful web application! Having an impressive GUI with which to present your findings can truly take your work to the next level, and looks great to employers and stakeholders!


### **Additional Resources**  
* [Codecademy HTML & CSS](https://www.codecademy.com/learn/web) # good tutorial on basics of HTML & CSS

* [Mozilla HTML Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)

* [Github Pages](https://pages.github.com/) #see how to turn GitHub Repo into live webpages

* [HTML5 Doctor Element Index](http://html5doctor.com/element-index/) # Good place to look up tags that you may need.

* [W3 Validator](https://validator.w3.org/#validate_by_input)  # validate HTML code check

* [Bootstrap](https://getbootstrap.com/)

* [Bootstrap 4 Tutorial](https://scrimba.com/g/gbootstrap4)

* [Bootstrap EXPO](https://expo.getbootstrap.com/) #check out some websites built with bootstrap!

* [FreeCodeCamp.org](https://www.freecodecamp.org/) # great free training for HTML/CSS/JavaScript and MORE!

* [CSS Tricks](https://css-tricks.com/)

* [Flexbox Froggy](http://flexboxfroggy.com/) # a game that helps learn to write CSS code something I have used and have my kids learn CSS

* [Declaring character encodings in HTML](https://www.w3.org/International/questions/qa-html-encoding-declarations.en)

* [HTML/CSS/JavaScript CheatSheet](https://htmlcheatsheet.com/js/) #good resource

* [CSV to HTML converter](http://convertcsv.com/csv-to-html.htm) # trust me comes in handy

* [HTML5 Semantic Elements](https://guide.freecodecamp.org/html/html5-semantic-elements/)

* [HTML Attribute References](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)

* [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools) # How to use chrome inspector

* [Firefox Dev Tools](https://developer.mozilla.org/en-US/docs/Tools/Performance/UI_Tour) #How to use firefox inspector

* [HTTP Everything you need to know](https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/) #great resource to explain all we are doing!

* [HTML versus the DOM](https://developers.google.com/web/tools/chrome-devtools/dom/#appendix) # good post read

-------------FOR WEEK 16 BUT WHERE WE ARE GOING WITH WHAT LEARNING THIS WEEK-------------- 
* [D3 Gallery](https://github.com/d3/d3/wiki/Gallery)

* [Learn D3 in 5 minutes](https://www.freecodecamp.org/news/learn-d3-js-in-5-minutes-c5ec29fb0725/)

* [D3 Basics](https://website.education.wisc.edu/~swu28/d3t/concept.html) 


# 11.1 Lesson Plan - Intro To HTML
* Students will gain a high-level understanding of HTML, CSS, and JavaScript and what their roles are when creating websites.

* Students will understand the basic parts of an HTML web page and how to create one from scratch.

* Students will learn to cover and utilize some of the most common HTML tags and selectors.

* **THANK BETHANY FOR THIS EXPLANATION**
    * HTML - think of as the *NOUN* of web design
    * CSS - think of as the *ADJECTIVE* of web design
    * JavaScript - think of as the *VERB* of web design
    
* This week you will be creating, styling and deploying your OWN web pages!


* 00-Ins_Hello, HTML
    * To create a .html document open VS Code create a new file and name index.html. In the editor type `!` and then hit the "Tab" button.  And there you go you have the guts for your html file :).
    * Required elements in HTML file. see this link for understanding of [HTML Elements](https://www.w3schools.com/html/html_elements.asp)  
        * `<!DOCTYPE html>` - **required** this tells the browser which version of HTML (or XML) used to write teh document.  Doctype is a declaration and on a tag.

        * `<html>` - **required** - represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.

        * `<head>` - **required** - not to be confused with [header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header), the head provides general information about the document, including its title and links to its scripts and stylesheets. None of the content inside the head should be content that needs to be visible on the rendered page.

        * `<meta charset-"utf-8">` - **required** - the meta element is used for representing any metadata information that can't be represented by another HTML meta-related element (`<title>`, `<style>`, `<script>`, etc.). In this case, we're specifying that we want to specify the character encoding of a web page. Essentially this helps tell the browser which language, writing system, and characters are being used in a web page. utf-8 is one of the most comprehensive and widely used and recommended. Students may occasionally see this not used, since most of the time this will be correctly inferred by the browser, or sent back from the server; it's still a good idea to include it to make sure that characters in our content are correctly interpreted, according to [The World Wide Web Consortium](https://www.w3.org/International/questions/qa-html-encoding-declarations.en)

        * `<title>` - **required** - defines the title of the document as shown in the browser's title bar or on the page tab. It can only contain text, any contained tabs are ignored.

        * `<body>` - **required** - represents the content of an HTML document. All content that needs to be rendered to the page should be placed inside the body.* 02-Stu_Research_HTML_Tags  
        
        * `<img src="http://..">` Within the `img` tag is `src` attribute.  HTML elements can hold additional attributes that configure the elements or adjust the behavior.  `src` is mandatory attribute of `img` that defines the URL of the image to be displayed.  Most elements are paired with a closing tag. But notice the `img` tag is self closing.
* 01-Stu_InspectLastActivity  
    * `HTML` represents initial page content, and the `DOM` represents current page content. When JavaScript adds, removes, or edits nodes, the DOM becomes different than the HTML - from [HTML vs DOM](https://developers.google.com/web/tools/chrome-devtools/dom/#appendix)
* 02-Stu_Research_HTML_Tags
* 03-Ins_HTML_Tags  
    * The [Mozilla Developer Network](https://developer.mozilla.org/en-US/) is considered the authoritative resource for web development technologies. Become familiar with finding answers on there before looking elsewhere.
    
* 04-Stu_MyFirst_HTML  
    * The `alt` attribute on `image` tag 
        * helps users with visual impairment understand what type of content is being displayed on the screen when using a screen reader or braille display.
        * Help search engines better understand content of web pages.
        * The `alt` attribute will be rendered if image can't be properly loaded.
    * In the `<a>` tag which defines a hyperlink you can use attribute
        * `target="_blank"` - which opens a new link in a tab
        * `target="_self"` - the default attribute for anchor tags and a hyperlink's is open the web page in the current tab.
* 05-Stu_FixThe_HTML  
* 06-Stu_WorkingWithTables **--Basic HW--**
    * Steps to create a table in HTML. 
        * `<table></table>` Table acts a container for rows and columns
        * `<tr></tr>`Table Row elements serve as rows for table
        * `<th></th>` Table Header for containing column titles and will have bod text by default
        * `<td></td>` Table Data are cells for holding data
        
    * Optional table tags but should be used as they give semantic meaning to a table
        * `<thead></thead>` Table Head acts as a container for row(s) holding table headers
        * `<tbody></tbody>` Table Body acts as a container for the rows holding our table data that is not part of the table head
        * `<tfoot></tfoot>` Table Footer acts as a container for bottom rows in a table which acts like a summary of the tables content.  
* 07-Stu_ImageAndLinks  **--Basic HW--** Show how to make images links...
    * Working with images and links
        * `article` and  `section` are semantic elements use to group out content into related sections. Can also help styling specific elements with CSS easier
        * Looking for help with appropriate semantic tage HTML5 Doctor has a [flowchart](http://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf)
        * `Div` element could be used to divide content and behaves the same as `article` and `sections` elements.  However `div` tag does not have semantic meaning and should only be used when no other semantic element is appropriate.
        * **`<figure></figure>`** is used in conjunction with `<figcaption></figcaption>` used to mark up diagrams, illustrations, photos, and code examples, etc.


# 11.2 Lesson Plan - Intro to GitHub Pages and CSS
* Students should have a firm understanding of how to deploy HTML webpages to the internet using GitHub Pages.

* Students will understand the basics of CSS styling.

* Students will have a basic grasp on how to position HTML elements on a webpage using CSS.


* 01-Stu_HTMLBio **--HW CHECK OUT HOW TO USE LINKS--**  
    * Use links to move between paged contained in same folder system
        * if the HTML files were stored in the same folder, the link would be `<a href="filename.html">Link to File</a>`
            * Use relative paths and not absolute paths when linking between files within the folder system. This ensures that, when the files are eventually deployed, the path linking between the pages changes to fit the new folder system
            
* 02-Stu_GithubPagesPersonal  
    * Wen host is activity or business of providing storage space and access for websites.  You cannot put website online without being hosted on a server somewhere.  
    * GitHub Pages even boasts about how it can turn simple text documents into live websites using a built-in system called "Jekyll".  LOOK UP **Jekyll** it is cool!
    * Steps for deploying to GitHub Pages
        i. New repo needs to be labeled "username.github.io"
        ii. Navigate to folder and clone repo into local
        iii. Add an HTML file named "index.html" and code your webpage!
        iv. Add, commit, and push changes to GitHub repo
        v. Go to settings tab in the repo and scroll down to GitHub pages to confirm web page published
        vi.  Check out your webpage `https://__username__.github.io/repositoryname` 
        
* 03-Stu_GithubPagesProject  
* 04-Ins_BasicCSS
    * CSS Cascading Style Sheets which is used to format HTML.
    * within css stylesheet which contains the CSS rules that can be applied to multiple tags/element
    ![CSS Styling](Images/css_styling.png)
* 05-Stu_DullCorp  
* 06-Stu_TargetedCSS  
* 07-Ins_CSSPositionedLayout  
* 08-Stu_AimedPositioning  
* 09-Stu_StudentBio  


# 11.3 Lesson Plan - Bootstrap
* Students will be able to discuss media queries, the technology that is used to create the responsive Bootstrap grid.

* Students will cover the Bootstrap Grid, and discover how to utilize it to position the elements on the page.

* Students will discover how to quickly and easily build web pages using pre-built Bootstrap components


* 01-Stu_ReviewActivity  
* 02-Stu_ChromeDevtools  
* 03-Ins_MediaQueries  **--BASIC HW COULD ALSO USE BOOTSTRAP--**
    * Get confused Google "CSS media queries"
    * An easy way to tell at what size we need to add a media query is to resize our Chrome window with inspector open. Browser window dimensions will be in top right corner.
* 04-Stu_MediaQueries  
* 05-Ins_BootstrapDemo  **--BASIC HW COULD ALSO USE BOOTSTRAP--**
    * Bootstrap provides us with several helpful features
        * A responsive 12 column grid
        * Bootsrap offers dozens of pre-built components
        * no longer need to include reset.css file, bootstrap normalizes CSS across various browsers.
        * Also includes various JavaScript components suck as sleek drop-down boxes and modals.
* 06-Stu_LoremGrid   **--BASIC HW COULD ALSO USE BOOTSTRAP--**
* 07-Stu_BootstrapComponents  
* 08-Ins_ResponsiveCols  **--BASIC HW COULD ALSO USE BOOTSTRAP--**
* 09-Stu_CloneAWebsite  


# Web Design Homework - Web Visualization Dashboard (Latitude)

## Background

Data is more powerful when we share it with others! Let's take what we've learned about HTML and CSS to create a dashboard showing off the analysis we've done.

![Images/landingResize.png](Images/landingResize.png)

### Before You Begin

1. Create a new repository for this project called `Web-Design-Challenge`. **Do not add this homework to an existing repository**.

2. Clone the new repository to your computer.

3. Inside your local git repository, create a directory for the web challenge. Use a folder name to correspond to the challenge: **WebVisualizations**.

4. Add your **html** files to this folder as well as your **assets**, **Resources** and **visualizations** folders.

5. Push the above changes to GitHub or GitLab.

## Latitude - Latitude Analysis Dashboard with Attitude

For this homework we'll be creating a visualization dashboard website using visualizations we've created in a past assignment. Specifically, we'll be plotting [weather data](Resources/cities.csv).

In building this dashboard, we'll create individual pages for each plot and a means by which we can navigate between them. These pages will contain the visualizations and their corresponding explanations. We'll also have a landing page, a page where we can see a comparison of all of the plots, and another page where we can view the data used to build them.

### Website Requirements

For reference, see the ["Screenshots" section](#screenshots) below.

The website must consist of 7 pages total, including:

* A [landing page](#landing-page) containing:
  * An explanation of the project.
  * Links to each visualizations page.
* Four [visualization pages](#visualization-pages), each with:
  * A descriptive title and heading tag.
  * The plot/visualization itself for the selected comparison.
  * A paragraph describing the plot and its significance.
* A ["Comparisons" page](#comparisons-page) that:
  * Contains all of the visualizations on the same page so we can easily visually compare them.
  * Uses a bootstrap grid for the visualizations.
    * The grid must be two visualizations across on screens medium and larger, and 1 across on extra-small and small screens.
* A ["Data" page](#data-page) that:
  * Displays a responsive table containing the data used in the visualizations.
    * The table must be a bootstrap table component.
    * The data must come from exporting the `.csv` file as HTML, or converting it to HTML. Try using a tool you already know, pandas. Pandas has a nifty method approprately called `to_html` that allows you to generate a HTML table from a pandas dataframe. See the documentation [here](https://pandas.pydata.org/pandas-docs/version/0.17.0/generated/pandas.DataFrame.to_html.html)

The website must, at the top of every page, have a navigation menu that:

* Has the name of the site on the left of the nav which allows users to return to the landing page from any page.
* Contains a dropdown on the right of the navbar named "Plots" which provides links to each individual visualization page.
* Provides two more links on the right: "Comparisons" which links to the comparisons page, and "Data" which links to the data page.
* Is responsive (using media queries). The nav must have similar behavior as the screenshots ["Navigation Menu" section](#navigation-menu) (notice the background color change).

Finally, the website must be deployed to GitHub pages.

When finished, submit to BootcampSpot the links to 1) the deployed app and 2) the GitHub repository.

### Considerations

* You may use the [weather data](Resources/cities.csv) or choose another dataset. Alternatively, you may use the included [cities dataset](Resources/cities.csv) and pull the images from the [assets folder](Resources/assets).
* You must use bootstrap. This includes using the bootstrap `navbar` component for the header on every page, the bootstrap table component for the data page, and the bootstrap grid for responsiveness on the comparison page.
* You must deploy your website to GitHub pages, with the website working on a live, publicly accessible URL as a result.
* Be sure to use a CSS media query for the navigation menu.
* Be sure your website works at all window widths/sizes.
* Feel free to take some liberty in the visual aspects, but keep the core functionality the same.

### Bonuses

* Use a different dataset! The requirements above still hold, but make it your own.
* Use a bootstrap theme to customize your website. You may use a tool like [Bootswatch](https://bootswatch.com/). Make it look snazzy, give it some attitude. If using this, be sure you also meet all of the requirements listed above.
* Add extra visualizations! The more comparisons the better, right?
* Use meaningful glyphicons next to links in the header.
* Have visualization navigation on every visualizations page with an active state. See the screenshots below.

### Screenshots

This section contains screenshots of each page that must be built, at varying screen widths. These are a guide; you can meet the requirements without having the pages look exactly like the below images.

#### Landing page

Large screen:
![Landing page large screen](Images/landing-lg.png)

Small screen:
![Landing page small screen](Images/landing-sm.png)
￼

#### Comparisons page

Large screen:
![comparison page large screen](Images/comparison-lg.png)

Small screen:
![comparison page small screen](Images/comparison-sm.png)

#### Data page

Large screen:
![data page large screen](Images/data-lg.png)

Small screen:
![data page small screen](Images/data-sm.png)

#### Visualization pages

You'll build four of these, one for each visualization. Here's an example of one:

Large screen:
![visualize page large screen](Images/visualize-lg.png)

Small screen:
![visualize page small screen](Images/visualize-sm.png)

#### Navigation menu

Large screen:
![nav menu large screen](Images/nav-lg.png)

Small screen:
![nav menu small screen](Images/nav-sm.png)

### Copyright

Trilogy Education Services © 2019. All Rights Reserved.
