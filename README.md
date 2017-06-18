### Requirements
1. NodeJS (Optional, just to test the receiving server)
2. NPM (NodeJS requirement - package manager)
3. curl

### Running the demo
1. Install dependencies and initialize submodules.
    ```sh
    $ ./installdep.sh
    ```
2. Compile the DDS app.
    ```sh
    $ ./compile.sh
    ```
3. Running the publisher which sends the fake data.
    ```sh
    $ ./build/app publisher
    ```
4. Run the subscriber where POST method is done.
    ```sh
    $ ./build/app subscriber
    ```

5. Run the server which receives the POST method from the subscriber.
    ```sh
    $ nodejs testserver/server.js
    ```
6. Check if the data is received at the server side, printing "Hello from subscriber".

### Reference

C++ Requests Library from: https://github.com/whoshuu/cpr
