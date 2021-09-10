FROM python:slim-buster

WORKDIR /usr/src/app

RUN mkdir /tmp/assets

COPY . .

RUN pip install --no-cache-dir --use-feature=in-tree-build ./krispy-bot

CMD [ "python3", "-u", "main.py", "192.168.100.50" ]
