FROM gitpod/workspace-full

USER gitpod

# Install custom tools, runtime, etc.
RUN sudo apt-get update && \
    sudo apt-get install -y zsh

# Install Oh-My-Zsh
RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh

# Install tree
RUN sudo apt-get install tree

# Install Hack font
RUN sudo apt-get install fonts-hack

# Reference : https://wayhome25.github.io/etc/2017/03/12/zsh-alias/

# Install fonts-powerline ( for zsh )
RUN sudo apt-get install fonts-powerline

# Config zsh theme
RUN echo 'prompt_context() { }' >> ~/.zshrc
RUN sed -i 's|robbyrussell|agnoster|g' ~/.zshrc
