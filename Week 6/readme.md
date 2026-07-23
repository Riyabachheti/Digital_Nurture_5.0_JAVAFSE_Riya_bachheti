# Cognizant Git Hands-on Exercises

This repository contains the solutions for the Cognizant Git Hands-on Labs.

---

# Git Hands-on Exercise 1

## Objectives

- Familiar with Git commands like `git init`, `git status`, `git add`, `git commit`, `git push`, and `git pull`.

## In this hands-on lab, you will learn how to

- Setup your machine with Git Configuration
- Integrate notepad++.exe to Git and make it a default editor
- Add a file to source code repository

## Prerequisites

- Install Git Bash client in your machine

## Exercise Problem

### Step 1: Setup your machine with Git Configuration

To create a new repository, signup with GitLab and register your credentials.

Login to GitLab and create a **GitDemo** project.

1. Check if Git client is installed properly.
2. Configure user level configuration of user ID and email ID.
3. Verify the configuration.

### Step 2: Integrate notepad++.exe to Git and make it a default editor

1. Verify whether notepad++.exe can be executed from Git Bash.
2. Configure the environment variable if required.
3. Create an alias command for notepad++.exe.
4. Configure the default editor.
5. Verify that notepad++ is configured as the default editor.

### Step 3: Add a file to source code repository

1. Create a new Git project **GitDemo**.
2. Verify the Git working directory.
3. Create **welcome.txt** and add content.
4. Verify the file.
5. Verify the contents.
6. Check Git status.
7. Add the file to staging.
8. Commit the changes.
9. Verify repository status.
10. Create a remote repository **GitDemo**.
11. Pull the remote repository.
12. Push the local repository to the remote repository.

---

# Git Hands-on Exercise 2

## Objectives

- Explain git ignore
- Explain how to ignore unwanted files using git ignore

## In this hands-on lab, you will learn how to

- Implement git ignore command to ignore unwanted files and folders

## Prerequisites

- Setting up Git environment
- Integrate notepad++ as a default editor
- A Git repository in the local system and a remote repository in GitLab

## Exercise Problem

Create a **.log** file and a **log** folder in the working directory of Git.

Update the **.gitignore** file in such a way that on committing, these files (.log extensions and log folders) are ignored.

Verify if the `git status` reflects the same about working directory, local repository and Git repository.

---

# Git Hands-on Exercise 3

## Objectives

- Explain branching and merging
- Explain about creating a branch request in GitLab
- Explain about creating a merge request in GitLab

## In this hands-on lab, you will learn how to

- Construct a branch, do some changes in the branch, and merge it with master (or trunk)

## Prerequisites

- Setting up Git environment with P4Merge tool for Windows

## Exercise Problem

### Branching

1. Create a new branch **GitNewBranch**.
2. List all the local and remote branches available in the current trunk. Observe the "*" mark which denotes the current pointing branch.
3. Switch to the newly created branch. Add some files to it with some contents.
4. Commit the changes to the branch.
5. Check the status using `git status`.

### Merging

1. Switch to master.
2. List out all the differences between trunk and branch.
3. List out all the visual differences between master and branch using P4Merge tool.
4. Merge the source branch to the trunk.
5. Observe the logging after merging using `git log --oneline --graph --decorate`.
6. Delete the branch after merging with the trunk and observe the Git status.

---

# Git Hands-on Exercise 4

## Objectives

- Explain how to resolve the conflict during merge.

## In this hands-on lab, you will learn how to

- Implement conflict resolution when multiple users are updating the trunk (or master) in such a way that it results into a conflict with the branch’s modification.

## Prerequisites

- Hands-on ID: **Git-T03-HOL_001**

## Exercise Problem

1. Verify if master is in clean state.
2. Create a branch **GitWork**. Add a file **hello.xml**.
3. Update the content of **hello.xml** and observe the status.
4. Commit the changes to reflect in the branch.
5. Switch to master.
6. Add a file **hello.xml** to the master and add some different content than previous.
7. Commit the changes to the master.
8. Observe the log by executing `git log --oneline --graph --decorate --all`.
9. Check the differences with Git diff tool.
10. For better visualization, use P4Merge tool to list out all the differences between master and branch.
11. Merge the branch to the master.
12. Observe the Git markup.
13. Use 3-way merge tool to resolve the conflict.
14. Commit the changes to the master once done with conflict.
15. Observe the Git status and add backup file to the `.gitignore` file.
16. Commit the changes to the `.gitignore`.
17. List out all the available branches.
18. Delete the branch which merged to master.
19. Observe the log by executing `git log --oneline --graph --decorate`.

---

# Git Hands-on Exercise 5

## Objectives

- Explain how to clean up and push back to remote Git.

## In this hands-on lab, you will learn how to

- Execute steps involving clean up and push back to remote Git.

## Prerequisites

- Hands-on ID: **Git-T03-HOL_002**

## Exercise Problem

1. Verify if master is in clean state.
2. List out all the available branches.
3. Pull the remote Git repository to the master.
4. Push the changes, which are pending from **Git-T03-HOL_002**, to the remote repository.
5. Observe if the changes are reflected in the remote repository.