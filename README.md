# babystuff
This project is to make recall and best consumer information for infant gear readily available to public.


#Team BabySafe!
Nadia Bahrami, Raziyeh Bazargan, Paul Sheridan, Kate Zurlo-Cuva

The purpose of this app is to help those with questions about baby gear purchases and, 1. if items have been recalled, and 2. gather info on customer ratings of individual items.
* As the user, I would like to be able to enter a UPC and determine quickly if my specific product has been recalled. If not, I would then like to know how others have rated it.
* As the user, I would like the site to be clean and simple in concept. Babies are complicated enough.
* As the user, I would like to have my data persist back and forth between pages.
* As the user, I would like to the site to be mobile ready.

* As developers, we would like the data to persist: the UPCs searched by the user -- so that searches are saved in memory.
* As developers, we would like the site to utilize media queries to ensure it is mobile-first design.
* As developers, we would like to use jQuery and functional programming to keep code slim, efficient, and elegant.
* As developers, we would like styling to conform to SMACSS and use the MVC method for development.
* As developers, we would like to develop a single-page app with various functionalities.


#What data is needed  and what each piece of data represents:
Object data CPSC: Recall YES or NO
Object data from customers:
* Name of product
* Rating
* Thumb
* Short description
* Model #

How data is organized behind the scenes, and how it is shown to the user
* Data will be scraped from 2 API JSON files: recall and consumer products (Walmart)
* User will see selected categories of data based on UPC -- same UPC for both files simultaneously with an AJAX callback.

How the user interacts with the data
* The user's needs are binary: buy or not? The user inputs a UPC and will be presented with results.
* UPC searches will be stored RESTfully so user can conduct multiple searches that will be cached in history.

#Vendor Credits:
Used with permission:
* Big red X:
https://en.wikipedia.org/wiki/File:Red_x_large.png
* Big green X:
https://commons.wikimedia.org/wiki/File:Green_tick.svg
* Header font: https://www.google.com/fonts/specimen/Zeyada
Zeyada by Kimberly Geswein
* Secondary font: Open Sans google font
https://www.google.com/fonts/specimen/Open+Sans
* Baby Header Image:
http://www.hongkiat.com/blog/baby-photography-40-photos-of-lovable-babies/

#Data Sources:
* Wal-Mart API, used with permission
https://developer.walmartlabs.com/
* Consumer Product Safety Commission
http://www.cpsc.gov/en/Recalls/CPSC-Recalls-Application-Program-Interface-API-Information/
