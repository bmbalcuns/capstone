# Capstone Proposal

## Name
### Knock It Back

## Overview
Knock It Back aims to provide an updatable database for users to search/find alcoholic and non-alcoholic beverages. Results will be rendered by a category selection (alcoholic versus non-alcoholic), alcohol type (gin, rum, vodka, etc.), and/or keyword search (part of a name or an ingredient). Beverage listings will include relevent information such as the name, a photo if available, ingredients and measurements, and directions on how to make.

This project is pulling from the Cocktails API (https://cocktailsapi.xyz/).

## Features
### User stories
As a general user, I want to be able to get and search for a limited list of beverages, because I want to find something new without logging in.
- Link/set up API to generate beverage lists.
- Display ten random beverages when the page is opened.
- Filter through all beverages, according to the general user's search, and display ten results.
- Provide the general user with the option to create an account.

As a logged-in user, I want to be able to get a full list of all available beverages, because I want to see all of the options.
- Allow the user to log in/log out or their account.
- Allow the user to view the the list of beverages in it's entirety.

As a logged-in user, I want to be able to favorite and/or hide beverages of my choice, because I want to keep track of what I do and do not like.
- Create "favorite" functionality and user's personal list of favorite beverages (allow favorite/un-favorite).
- Display user's list of favorites upon sign-in.
- Create "hide" functionality and user's list of hidden beverages (allow hide/un-hide).
- Filter user's hidden beverages from all displayed beverages and/or searches.
- Allow the user to make notes/add comments to beverages.

As the administrator, I want to ensure that this application provides a running list of various types of beverages ONLY, because that is its sole purpose.
- Monitor the API and edit requests as necessary.

## Data Model
The data that I will need to store for my application includes: drinks (each of which will also include: image, drink name, category, alcohol type, ingredients, measurements, and instructions), users, favorited drinks, hidden drinks, and comments.

Many-to-many relationship between beverages and ingredients.

Many-to-one relationship between users and beverages.

Many-to-one relationshp between users and their respective favorited/hidden lists.

## Schedule
Begin Capstone: 26 August 2020

Present Capstone: 18 September 2020

### Milestones/Minimal Viable Products*
Tasks will be completed in the following order, so long as time allows. If I am unable to complete all tasks, I will stop at an appropriate MVP stage (maked by an asterisk), and any remaining tasks will be moved to additional/future tasks. All dates are tentative and assumed COB.
- Receive approval for Capstone proposal: 27 August
- Link/set up API that stores all beverages: 2 September
- Set up models/views: 3 September
- Implement search capabilities: 3 September
- Limit general user searches: 8 September*
- Create sign up/log in/log out functions and users: 9 September
- Implement favoriting/hiding and favorites list/hidden list: 10 September
- Filter user's hidden list from all displayed lists/results: 10 September*
- Order favorites/hidden lists a-z: 14 September
- Set up "load more"/pages: 14 September*
- Styling until completion: 18 September*

If there is additional time, the following task(s) should be completed.
- Listing by 123/a-z/$%&
- Implement user commenting on individual items
- Implement ability to add new beverages and all relevant information (required) to the full list of beverages
- Create "flag"/"report" functionality ("remove" functionality only for admin)
