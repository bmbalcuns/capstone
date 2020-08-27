# Capstone Proposal

## Name
### Knock It Back

## Overview
Knock It Back aims to provide an updatable database for users to search/find alcoholic and non-alcoholic beverages. Results will be rendered by a category selection (alcoholic versus non-alcoholic), alcohol type (gin, rum, vodka, etc.), and/or keyword search (part of a name or an ingredient). Beverage listings will include relevent information such as the name, a photo if available, ingredients and measurements, and directions on how to make.

This project is pulling primarily from TheCocktailDB.com API: https://www.thecocktaildb.com/api.php

## Features
### User stories
As a general user, I want to be able to get and search for a limited list of beverages, because I want to find something new without logging in.
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

As a logged-in user, I want to be able to add new beverages, so I can share ones that I know with others.
- Allow the user to add new beverages and all relevant information (required) to the full list of beverages.
- Create "edit" functionality and allow the user to edit (only) new beverages that they have added.
- Include new beverages in general and logged-in user lists and searches.

As the administrator, I want to ensure that this application provides a running list of various types of beverages only, because that is its sole purpose.
- Create "flag"/"report" functionality to allow general and logged-in users to bring list items up for review (do not allow "remove" functionality).
- Review list items and return/edit/remove them as necessary.

## Data Model
The data that I will need to store for my application includes: drinks (each of which will also include: image, drink name, category, alcohol type, ingredients, measurements, and instructions), users, favorited drinks, hidden drinks, and comments.

## Schedule
### Milestones
