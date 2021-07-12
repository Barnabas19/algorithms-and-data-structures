/*
class Node{
    constructor(data=null, next=null){
        this.data = data;
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.size = 0;
        this.head = null
    }
    addFirstData(data){
            this.head = new Node(data, this.head);
            this.size++
    }
    printListData(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next;
        }
    }
    insertLast(data){
        let current = this.head;
        if(!current){
            this.head = new Node(data)
            this.size++
        }else{
            while(current){
                if(!current.next){
                    current.next = new Node(data);
                    this.size++
                    return
                }
                current = current.next
            }
        }
    }
    printSize(){
        console.log(`current size is: ${this.size}`)
    }
    insertAt(data, index){
        if(index === 0){
                this.head = new Node(data, this.head);
                this.size++
        }else if(index === this.size-1){
            let current = this.head;
            let previous = null;
            while(current){
                if(!current.next){ //when you reach the last node...
                    previous.next = new Node(data, current);
                    this.size++
                }
                previous = current;
                current = current.next
            }
        }else if(index > 0 && index < this.size-1){
            let counter = 0;
            let current = this.head;
            let previous = null
            while(current){
                if(index === counter){
                    previous.next = new Node(data, current) //previous will never have to be null since index === 0 will never be satisfied
                    this.size++
                }
                previous = current;
                current = current.next
                counter++
            }
        }
    }
}

const ll = new LinkedList();

ll.addFirstData(3000);
ll.addFirstData(5000);
ll.addFirstData(10000);
ll.insertLast(2200)
ll.addFirstData(45);
ll.addFirstData(67);
ll.addFirstData(180);
ll.insertLast(27)
ll.insertAt(43, 0);
ll.insertAt(888, 8);
ll.insertAt(333, 8);

ll.printListData()
ll.printSize()


class Contact{
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}

const contacts = new Map();

contacts.set("Barnabas", new Contact("Barnabas Babatunde", "Lagos"));
contacts.set("Adeleye", new Contact("Adeleye Constance", "Ogun"));

contacts.forEach((contact)=>{
    console.log(contact)
    console.log(contact.name)
})

const contacts = new Map([["address1", "Lagos"], ["address2", "Ogun"]])
console.log(contacts)

const contact = {}
contact["address1"] = "Lagos";
contact["address2"] = "Ogun";
console.log(contact)


//STACKS
//implement the push and the pop methods...

class Stack{
    constructor(){
        this.items = [];
        this.count = 0;
    }

    //add element to top of stack
    push(element){
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count}`);
        this.count++;
        return this.count - 1;
    }

    //remove element from top of stack
    pop(){
        const deletedItem = this.items[this.count-1];
        this.items[this.count-1] = null;
        console.log(`removed ${deletedItem} from stack`)
        this.count--;
        console.log(this.items);
    }

}

const stack = new Stack()
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
stack.push(500);
stack.push(600);

stack.pop();
stack.pop();
stack.pop();
*/

//QUEUE
//implementation with an array
/*
class Queue{
    constructor(){
        this.size = 0;
        this.list = [];
    }

    //enqueue
    enqueue(data){
        this.list.push(data);
        console.log(`added ${data} to array`);
        console.log(this.list);
    }

    //dequeue
    dequeue(){
        const deleted = this.list[0]
        this.list.shift();
        console.log(`deleted ${deleted} from array`);
        console.log(this.list);
    }
}

const queue = new Queue()
queue.enqueue(100)
queue.enqueue(200);
queue.enqueue(300);

queue.dequeue();
*/

//implementation with a linkedlist

/*
class Node{
    constructor(data=null, next=null){
        this.data = data;
        this.next = next;
    }
}

class linkedlist{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //enqueue
    enqueue(node){
        //linkedList is empty: this.head === null
        if(!this.head){
            this.head = node;
            return;
        }

        //linkedlist is not empty: this.head !== null
        let current = this.head;
        while(current){
            //last node
            if(!current.next){
                current.next = node;
                return;
            }
            current = current.next;
        }
    }

    //dequeue
    dequeue(){
        //linkedList is empty: this.head === null
        if(!this.head){
            console.log('list is empty');
            return;
        }

        //linkedlist is not empty: this.head !== null
        this.head = this.head.next;
    }

    printList(){
        //linkedList is empty
        if(!this.head){
            console.log(`list is empty`);
            return
        }
        //linkedList is not empty
        let current = this.head
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new linkedlist();
list.enqueue(new Node(100));
list.enqueue(new Node(200));
list.enqueue(new Node(300));
list.enqueue(new Node(500));
list.printList();

list.dequeue()
list.dequeue()
list.dequeue()
list.dequeue()
console.log('...........................')
list.printList()
*/

//HEAP IMPLEMENTATION WITH ARRAY: YOU DO NOT NEED A LEFT POINTER AND A RIGHT POINTER...SINCE IT IS NOT BEING IMPLEMENTED AS A (DOUBLY) LINKED LIST
/*class MinHeap{
    constructor(){
        this.storage = [];
        this.size = 0;
    }
    addNewNode(data){
        this.storage.push(data);
        this.size++
    }
    printHeap(){
        console.log(this.storage);
    }
    heapify(){
        this.storage.sort(function(a, b){ return a-b });
        console.log(this.storage)
    }
    getParentIndex(index){ //passed the index of the child node
        return Math.floor((index-1)/2);
    }
    getLeftChildIndex(index){ //passed the index of the parent node
        return 2*index + 1;
    }
    getRightChildIndex(index){  //passed the index of the parent node
        return 2*index + 2;
    }
    //check if a random node has a parent(node)
    hasParent(index){
        //return true if it does. return false if it does not (a root)
        return this.getParentIndex(index) >= 0;
    }
    //check if a random node has a left child(node)
    hasLeftChild(index){
        //return true if it does. return false if it does not
        return (this.getLeftChildIndex(index)>=0 && this.getLeftChildIndex(index)<this.size);
    }
    hasRightChild(index){
        //return true if it does. return false if it does not
        return (this.getRightChildIndex(index)>=0 && this.getRightChildIndex(index)<this.size);
    }
    parent(index){
        //root
        if(this.getParentIndex(index)<0){
            return "a root has no parent";
        }
        //not a root
        return this.storage[this.getParentIndex(index)];
    }
    leftChild(index){
       //a leaf
        if(!(this.getLeftChildIndex(index)>=0 && this.getLeftChildIndex(index)<this.size)){
            if(!(this.getRightChildIndex(index)>=0 && this.getRightChildIndex(index)<this.size)){
                return "a leaf has no child(ren)"
            }
        }

        //not a leaf: will surely have a child
             //does not have a left child
             if(!this.storage[this.getLeftChildIndex(index)]){
                 return "has no left child - incomplete binary tree - not a heap"
             }

             //has a left child
             return this.storage[this.getLeftChildIndex(index)];
    }
    rightChild(index){
        //a leaf
        if(!(this.getLeftChildIndex(index)>=0 && this.getLeftChildIndex(index)<this.size)){
            if(!(this.getRightChildIndex(index)>=0 && this.getRightChildIndex(index)<this.size)){
                return "a leaf has no child(ren)"
            }
        }

        //not a leaf: will surely have a child
             //does not have a right child
             if(!this.storage[this.getRightChildIndex(index)]){
                 return "has no right child"
             }

             //has a right child
             return this.storage[this.getRightChildIndex(index)];
    }
}

const minHeap = new MinHeap();

minHeap.addNewNode(1);
minHeap.addNewNode(2);
minHeap.addNewNode(5);
minHeap.addNewNode(3);
minHeap.addNewNode(4);
minHeap.addNewNode(6);

minHeap.printHeap();
console.log('.......................................')
minHeap.heapify();
console.log(minHeap.getParentIndex(2));
console.log(minHeap.getParentIndex(4))
console.log(minHeap.getParentIndex(6));
console.log(minHeap.leftChild(6));
console.log(minHeap.leftChild(5));
console.log(minHeap.leftChild(4));
console.log(minHeap.leftChild(3));
console.log(minHeap.rightChild(6));
console.log(minHeap.rightChild(5));
console.log(minHeap.rightChild(4));
console.log(minHeap.rightChild(3));

console.log(minHeap.leftChild(0));
console.log(minHeap.leftChild(1));
console.log(minHeap.leftChild(2));
*/

//MIN-HEAP IMPLEMENTATION WITH 2-D LINKED LIST
/*
class Node{
    constructor(data=null, left=null, right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }
    add(data){
        //linked list is empty
        if(!this.head){
            this.head = new Node(data) //added the root
        }else{
            //root already exists
            let current = this.head;
            while(current){
                let sibling = current.right
                if(!current.left){   //does not have left child
                    current.left = new Node(data)
                    return;
                }else{        //has a left child
                    if(!current.right){   //does not have a right child
                        current.right = new Node(data);
                        return;
                    }else{   //has a right child
                        if(sibling){
                            current = sibling
                        }else{
                            current = current.left
                        }
                    }
                }
            }
        }
    }
}

class MinHeap{
    constructor(){
        this.size = 0;
        //linked list
        this.linkedList = new LinkedList();
    }
    addNewNode(data){
        this.linkedList.add(data)
    }
}
*/

//GRAPH IMPLEMENTATION IN JAVASCRIPT

//...........ADD A VERTEX MANUALLY........ADD AN EDGE MANUALLY.............
/*
class Graph{
    constructor(){
        this.vertices = []   //an array of nodes/vertices
        this.edges = []       //an array of edges
        this.numberOfEdges = 0;
    }
    addVertex(vertex){
        this.vertices.push(vertex);   //adding a new vertex to vertices-array
        this.edges[vertex] = []       //setting an array field (of index: vertex) in edges-array to an array

        console.log(this.edges);
        console.log(this.vertices);
    }
    addEdge(vertex1, vertex2){
        this.edges[vertex1].push(vertex2)
        this.edges[vertex2].push(vertex1)
        this.numberOfEdges++;

        console.log(this.edges);
    }
    removeEdge(vertex1, vertex2){
        this.edges.splice(vertex2, 1);
        this.numberOfEdges--;

        console.log(this.edges);
    }
    removeVertex(vertex){
        this.vertices = this.vertices.filter((vtx)=>{  // O(n) time
            return !(vtx === vertex);
        })
        console.log(this.vertices);

        while(this.edges[vertex].length){
            const adjacentVertex = this.edges[vertex].pop();

            this.removeEdge(adjacentVertex, vertex);
        }
    }
}

const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addEdge(0,1);
graph.removeVertex(0);
*/
/*
function sort(list){
    for(let i = 0; i<list.length-1; i++){
        if(list[i]>list[i+1]){
            let temp = list[i];
            list[i] = list[i+1];
            list[i+1] = temp;
        }
    }
    console.log(list);
}

const array = [8, 7, 6, 5, 4, 3];
sort(array);
*/

/*function average(arr, size){
    const result = [];

    for(let i=0; i<arr.length-size + 1; i++){
        let sum = 0;
        for(let j=i; j<i+size; j++){
            sum = sum+arr[j];
        }
        result.push(sum/size);
    }

    return result;
}

const arrOfAve = average([1,2,3,4,5,6,7,8,9], 5);
console.log(arrOfAve);

//applying sliding window pattern
function average(arr, size){
    const window = [];
    const result = [];

    for(let i=0; i<arr.length-size+1; i++){

    }
}*/
/*
function average(arr, size){
    const result = [];
    for(let i=0; i<=arr.length-size; i++){
        let sum = 0;
        for(let j=i; j<size+i; j++){
            sum = sum+arr[j];
        }
        result.push(sum/size);
    }
    console.log(result);
}

average([1,2,3,4,5,6,7,8,9,10], 5);
*/

//sliding window pattern....
/*
function average(arr, size){
    let windowStart = 0;
    let windowSum = 0;
    let result = [];

    for(let windowEnd=0; windowEnd<arr.length; windowEnd++){
        windowSum += arr[windowEnd];

        if(windowEnd >= size-1){
            result.push(windowSum/size);
            windowSum = windowSum - arr[windowStart];
            windowStart++
        }
    }

    console.log(result);
}

average([1,2,3,4,5,6,7,8,9,10], 5);
*/

/*
function maxSum(arr, size){
    const result = [] //all sums go here
    let windowStart = 0;
    let windowSum = 0;

    for(let windowEnd=0; windowEnd<arr.length; windowEnd++){
        windowSum += arr[windowEnd];

        if(windowEnd >= size-1){
            result.push(windowSum);

            //remove extreme left of window
            windowSum = windowSum - arr[windowStart];

            //slide the window
            windowStart += 1;
        }
    }

    console.log(Math.max(...result));

}

maxSum([2,3,4,1,5], 2);
*/


/*
function smallest(arr, s){
    let k = 1;
    let windowStart = 0;
    let windowSum = 0;

    for(let windowEnd=0; windowEnd<k; windowEnd++){
        windowSum += arr[windowEnd];
        if(windowSum >= s){
            console.log(k);
            return;
        }
        k++
        windowSum -= arr[windowStart];
        windowStart++
    }

}
*/
/*
function maxNum(arr, k){
    let numberOfArrays = 0;

    for(let windowEnd=0; windowEnd<arr.length; windowEnd++){
        if(windowEnd >= k-1){
            numberOfArrays++
        }
    }
    console.log(numberOfArrays)
}

maxNum([1,2,3,4,5,6,7,8,9], 4);
*/

//MASTERING SLIDING WINDOW PATTERN
/*
function average(arr, k){
    let result = [];
    let windowStart = 0;
    let windowSum = 0;

    for(let windowEnd=0; windowEnd<arr.length; windowEnd++){
        windowSum += arr[windowEnd];

        if(windowEnd >= k-1){
            result.push(windowSum/k);
            windowSum = windowSum-arr[windowStart];
            windowStart++
        }
    }

    console.log(result);
}

average([1,2,3,4,5,6,7,8,9,10], 5)
*/

//smallest subarray with a given sum

/*function smallestSubArray(arr, sum){
    //sliding window pattern

    let windowSum = 0;
    let windowStart = 0;
    let minLength = Infinity;

    for(let windowEnd=0; windowEnd<arr.length; windowEnd++){
        windowSum = windowSum + arr[windowEnd]

        //whenever/while the windowSum >= sum, continue to shrink the window from the left.
        while(windowSum >= sum){
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum = windowSum - arr[windowStart];
            windowStart++;
        }
    }

    console.log(minLength);
}

smallestSubArray([2, 1, 5, 2, 3, 2], 7);
smallestSubArray([3, 4, 1, 1, 6], 8)*/

/*
function fruits_into_baskets(fruits){
    let windowStart = 0;
    let fruitFrequency = {};
    let maxLength = 0;

    for(let windowEnd=0; windowEnd<fruits.length; windowEnd++){
        let rightFruit = fruits[windowEnd]
        if(!(rightFruit in fruitFrequency)){
            fruitFrequency[rightFruit] = 0;
        }
        fruitFrequency[rightFruit] += 1;

        while(Object.keys(fruitFrequency).length > 2){  //keep running this loop until number of distinct keys is no more than k
            const leftFruit = fruits[windowStart];
            fruitFrequency[leftFruit] -= 1;

            if(fruitFrequency[leftFruit] === 0){
                delete fruitFrequency[leftFruit]
            }
            windowStart++;
        }

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    console.log(maxLength)
}

fruits_into_baskets(['A', 'B', 'C', 'A', 'C']);

*/
/*
function fruits(arr){
    let charFrequency = {}
    let max1, max2;
    let list = [];

    for(let windowEnd=0; windowEnd<arr.length; windowEnd++){
        let leftChar  = arr[windowEnd];
        if(!(leftChar in charFrequency)){
            charFrequency[leftChar] = 0;
        }
        charFrequency[leftChar]++;
    }

    for(let char in charFrequency){
        list.push(charFrequency[char]);
    }

    console.log(list)
    max1 = Math.max(...list);
    list.splice(list.indexOf(max1), 1);

    console.log(list)
    max2 = Math.max(...list);

    //console.log(max1 + max2)

}

fruits(['a', 'b', 'c', 'a', 'c']);
*/

/*
function maxFruits(arr){
    let windowStart = 0;
    let charFrequency = {}  //hashmap
    let maxLength = 0;

    for(let windowEnd=0; windowEnd<arr.length; windowEnd++){
        //complete implementation of the hashmap
        let leftChar = arr[windowEnd];
        if(!(leftChar in charFrequency)){
            charFrequency[leftChar] = 0;
        }
        charFrequency[leftChar]++

        while(Object.keys(charFrequency).length > 2){
            let char = arr[windowStart];
            charFrequency[char]--

            if(charFrequency[char] == 0){
                delete charFrequency[char];
            }

            windowStart++
        }

        maxLength = Math.max(maxLength, windowEnd-windowStart+1);
    }

    console.log(maxLength)
}

maxFruits(['A', 'B', 'C', 'A', 'C']);
maxFruits(['A', 'B', 'C', 'B', 'B', 'C'])
*/

/*..........................................................................................................
function noRepeat(str){
    //let windowStart = 0;
    let maxLength = 0;
    let charFrequency = {}  //hashmap

    for(let windowEnd=0; windowEnd<str.length; windowEnd++){
        let leftChar = str[windowEnd];
        if(!(leftChar in charFrequency)){
            charFrequency[leftChar] = 0;
        }
        charFrequency[leftChar]++

        if(charFrequency[leftChar] > 1){
            maxLength--  //buffer
        }

        maxLength++;
    }

    console.log(maxLength)
}

noRepeat("aabccbb")
noRepeat("abbbb")
noRepeat("abccde")
noRepeat("babatunde")
..............................................................................................................
*/

//largest sub-string with no more than two DISTINCT characters
/*
function largest(str){
    let windowStart = 0
    let maxLength = 0;
    let charFrequency = {} //hashmap

    for(let windowEnd=0; windowEnd<str.length; windowEnd++){
        let rightChar = str[windowEnd];
        if(!(rightChar in charFrequency)){
            charFrequency[rightChar] = 0
        }
        charFrequency[rightChar]++

        while(Object.keys(charFrequency).length > 2){
            let leftChar = str[windowStart];
            charFrequency[leftChar]--

            if(charFrequency[leftChar] == 0){
                delete charFrequency[leftChar];  //controls flow
            }

            windowStart++
        }

        maxLength = Math.max(maxLength, windowEnd-windowStart+1);
    }

    console.log(maxLength);
}

largest('abbcb')
*/







//get the most frequent char
//get the char with (MAX) frequency no more than k

/*
............................................................................................................
function largest(str, k){
    let windowStart = 0;
    let charFrequency = {};
    let maxFrequency = 0;
    let max = 0;

    for(let windowEnd=0; windowEnd<str.length; windowEnd++){
        let rightChar = str[windowEnd];
        if(!(rightChar in charFrequency)){
            charFrequency[rightChar] = 0;
        }
        charFrequency[rightChar]++

        maxFrequency = Math.max(maxFrequency, charFrequency[rightChar]);
    }

    while(windowStart<str.length){
        let leftChar = str[windowStart]

        if(charFrequency[leftChar] <= k){
            max = Math.max(max, charFrequency[leftChar])
        }

        windowStart++
    }

    console.log(max+maxFrequency);

}

largest("abccccdddddddde", 4)
largest("aabccccdddddddde", 2)
largest("abccccdddddddde", 1)
............................................................................................................
*/

/*

function largest(arr, k){
    let windowStart = 0;
    let zeroFreq = {}  //hashmap
    let maxLength = 0


    for(let windowEnd=0; windowEnd<arr.length; windowEnd++){
        let left = arr[windowEnd];

        if(!(String(left) in zeroFreq)){
            zeroFreq[String(left)] = 0
        }
        zeroFreq[String(left)]++

        while(zeroFreq["0"] > k){
            zeroFreq[String(windowStart)]--

            if(zeroFreq[String(windowStart)] == 0){
                delete zeroFreq[String(windowStart)];
            }

            windowStart++
        }


        maxLength = Math.max(maxLength, windowEnd-windowStart+1);
    }

    console.log(maxLength)
}

largest([0,1,1,0,0,1], 2)

*/

/*
function permutation(str, pattern){
    let windowStart = 0;
    let result = [];

    for(let windowEnd = 0; windowEnd<str.length; windowEnd++){

        let substr = ""

        for(let i=windowStart; i < windowStart + pattern.length; i++){
            substr += str[i]
        }

        result.push(substr);
        windowStart++
    }

    console.log(result);
}

permutation("babatunde", "bbc")
*/



//PAY ATTENTION YOU ASS HOLE!

/*
function maxSum(arr, k){
    let windowStart = 0;
    let windowSum = 0;
    let result = [];
    let max;

    for(let windowEnd=0; windowEnd<arr.length; windowEnd++){
        if(windowEnd-windowStart+1 > k){
            result.push(windowSum);
            windowSum -= arr[windowStart]
            windowStart++
        }
        windowSum += arr[windowEnd];
    }

    max = Math.max(...result);
    console.log(max);
}

maxSum([2,1,5,1,3,2], 3);
maxSum([2,3,4,1,5], 2);
*/

/*
function smallest(arr, s){
    let windowStart = 0;
    let sum = 0;
    let minLength = Infinity;

    for(let windowEnd=0; windowEnd<arr.length; windowEnd++){
        sum = sum + arr[windowEnd];

        while(sum >= s){
            minLength = Math.min(minLength, windowEnd-windowStart+1);
            sum = sum - arr[windowStart]
            windowStart++  //buffer
        }

    }

    console.log(minLength);
}

smallest([2,1,5,2,3,2], 7);
smallest([2,1,5,2,8], 7);
*/


/*function longestSub(str, k){
    let windowStart = 0;
    let hashmap = {};
    let maxLength = 0;

    for(let windowEnd=0; windowEnd<str.length; windowEnd++){
        let rightChar = str[windowEnd];

        if(!(rightChar in hashmap)){
            hashmap[rightChar] = 0;
        }
        hashmap[rightChar]++

        while(Object.keys(hashmap).length > k){
            let leftChar = str[windowStart]
            hashmap[leftChar]--
            if(hashmap[leftChar] === 0){
                delete hashmap[leftChar]
            }

            windowStart++
        }

        maxLength = Math.max(maxLength, windowEnd-windowStart+1);
    }

    console.log(maxLength)
}

longestSub("araaci", 2);
longestSub("araaci", 1)
longestSub("cbbebi", 3)
*/

/*
function fruits(str){
    let windowStart = 0;
    let hashmap = {};
    let maxLength = 0;

    for(let windowEnd=0; windowEnd<str.length; windowEnd++){
        let rightChar = str[windowEnd];

        if(!(rightChar in hashmap)){
            hashmap[rightChar] = 0;
        }
        hashmap[rightChar]++

        while(Object.keys(hashmap).length > 2){
            let leftChar = str[windowStart]
            hashmap[leftChar]--
            if(hashmap[leftChar] === 0){
                delete hashmap[leftChar]
            }

            windowStart++
        }

        maxLength = Math.max(maxLength, windowEnd-windowStart+1);
    }

    console.log(maxLength)
}

fruits(['A', 'B', 'C', 'B', 'B', 'C'])
*/

/*
function longest(str){
    let windowStart = 0;
    let hashmap = {};
    let maxLength = 0;

    for(let windowEnd=0; windowEnd<str.length; windowEnd++){
        let rightChar = str[windowEnd];
        if(!(rightChar in hashmap)){
            hashmap[rightChar] = 0;
        }
        hashmap[rightChar]++

        if(hashmap[rightChar]>1){  //a buffer
            windowStart++
        }

        maxLength = Math.max(maxLength, windowEnd-windowStart+1);
    }

    console.log(maxLength)
    console.log(hashmap)
}

longest("abccde")
longest("aabccbb")
longest("abbbb")
*/



/*function repeat(str, k){
    //let windowStart = 0;
    let map = {};
    let maxLength = 0;
    let nextLenght = 0;

    for(let windowEnd=0; windowEnd<str.length; windowEnd++){
        let rightChar = str[windowEnd]
        if(!(rightChar in map)){
            map[rightChar] = 0;
        }
        map[rightChar]++;

        maxLength = Math.max(maxLength, map[rightChar]);

        if(map[rightChar] <= k){
            nextLenght = Math.max(nextLenght, map[rightChar])
        }
    }

    console.log(maxLength+nextLenght)
}

repeat("aabccbb", 2)
repeat("abbcb", 1);
repeat("abccde", 1)
*/

/*
function zero(arr, k){
    let windowStart = 0;
    let oneCount = 0;
    let zeroCount = 0;
    let maxLength = 0;

    for(let windowEnd=0; windowEnd<arr.length; windowEnd++){

        if(arr[windowEnd]===1){
            oneCount++
        }else{
            zeroCount++
        }

        while(zeroCount > k){
            windowStart++
        }

        maxLength = Math.max(maxLength, windowEnd-windowStart+1)
        console.log(maxLength)
    }

}

zero([0,1,1,0,0,0,1,1,0,1,1], 2)
*/

//given two arrays, obtain an array of common elements

/*
function common(arr1, arr2){
    let result = [];
    let smaller, larger;
    let map = {}

    if(arr1.length !== arr2.length){
        smaller = arr1.length<arr2.length ? arr1 : arr2;
        larger = arr1.length>arr2.length ? arr1 : arr2;
    }else{
        smaller = arr1;
        larger = arr2;
    }

    console.log(smaller)
    console.log(larger)

    for(let windowEnd=0; windowEnd<smaller.length; windowEnd++){
        if(!(smaller[windowEnd] in map)){
            map[String(smaller[windowEnd])] = 0
        }
        map[String(smaller[windowEnd])]++

        if(map[String(smaller[windowEnd])] <= 1){
            for(let start=0; start<larger.length; start++){
                if(smaller[windowEnd] === larger[start]){
                    result.push(smaller[windowEnd]);
                    break
                }
            }

        }
    }

    console.log(result);
}

common([1,2,3,3,3,4,5], [1,4,3,6,3,3,3,3,3,3,7,8,9])

//HASMAPS ARE MADDDDDD

var new_message = new messageModel({
    name: String(req.body.name),
    email: String(req.body.email),
    message: String(req.body.message)
})

new_message.save(
    function(err, msg){
        if(err){
            throw err;
        }
        res.sendFile(path.join(__dirname, "index.html"));
    }
)
*/
/*

let map = new Map();
map.set(1, "studentOne");
console.log(map.has(1));
console.log(map.has(2));
*/

/*
let map = new Map();
map.set(1, "studentOne");
map.set(2, "studentTwo");
map.set(3, "studentThree");

console.log(map.has(1));    //true
console.log(map.delete(1));   //true
console.log(map.has(1));     //false
console.log(map.has(2));   //true
console.log(map.has(3));   //true

map.clear();    //clearing all data in the map

console.log(map.has(1));  //false
console.log(map.has(2));  //false
console.log(map.has(3));  //false
*/
/*
let map = new Map();
map.set(1, "studentOne");
map.set(2, "studentTwo");

let iterator = map.keys();   //returns an iterator object

console.log(iterator.next().value);
console.log(iterator.next().value);
*/
/*
let map = new Map();
map.set(1, "studentOne");
map.set(2, "studentTwo");

let iterator = map.values();   //returns an iterator object

console.log(iterator.next().value);
console.log(iterator.next().value);
*/
/*

let map = new Map();
map.set(1, "studentOne");
map.set(2, "studentTwo");

let iterator = map.entries();   //returns an iterator object

console.log(iterator.next().value);
console.log(iterator.next().value);
*/


//PATTERNS ARE DOPE
/*
function ones(arr, k){
    let oneCount = 0;
    let windowStart = 0;
    let maxLength = 0;

    for(let windowEnd=0; windowEnd<arr.length; windowEnd++){
        let rightChar = arr[windowEnd];

        if(rightChar === 1){
            oneCount++
        }

        while(((windowEnd-windowStart+1) - oneCount) > k){  //windowEnd is frozen here
            let leftChar = arr[windowStart];
            if(arr[leftChar] === 1){
                oneCount--
            }
            windowStart++    //windowStart controls flow
        }

        maxLength = Math.max(maxLength, windowEnd-windowStart+1);
    }

    console.log(maxLength)
}

ones([0,1,1,0,0,0,1,1,0,1,1], 2);
ones([0,1,0,0,1,1,0,1,1,0,0,1,1], 3);
*/

//THIS ALGORITHM SWEET DIE

/*
function permutation(str, ptn){
    let k = ptn.length;

    for(let windowEnd=0; windowEnd <= str.length-k; windowEnd++){
        let substr = ""
        for(let i=windowEnd; i<windowEnd+k; i++){
            substr = substr + str[i]
        }

        let truthCheck = true;

        for(let end=0; end<ptn.length; end++){
            if(substr.includes(ptn[end])){
                truthCheck = truthCheck && true
            }else{
                truthCheck = truthCheck && false
            }
        }

        if(truthCheck){
            console.log(truthCheck)
            return;
        }
    }
    console.log(false)
}

permutation("oidbcaf", "abc")
permutation("odicf", "dc")
permutation("bcdxabcdy", "bcdyabcdx")
permutation("aaacb", "abc")

//I'M GETTING BETTER AT THIS THING!!

*/
/*
function anagram(str, ptn){
    let k = ptn.length;
    let result = [];
    let windowStart = 0;

    for(let windowEnd=0; windowEnd<=str.length-k; windowEnd++){
        let substr="";
        for(let end=windowEnd; end<windowEnd+k; end++){
            substr = substr + str[end]
        }

        let truthCheck = true;
        for(let i=0; i<ptn.length; i++){
            if(substr.includes(ptn[i])){
                truthCheck = truthCheck && true
            }else{
                truthCheck = truthCheck && false
            }
        }


        if(truthCheck){
            result.push(windowStart)
        }

        windowStart++

    }

    console.log(result)
}
anagram("ppqp", "pq")
anagram("abbcabc", "abc")
*/

/*
function smallest(str, ptn){
    function checker(sub, ptrn){
        let truthCheck = true

        for(let end=0; end<ptrn.length; end++){
            if(sub.includes(ptrn[end])){
                truthCheck = truthCheck && true;
            }else{
                truthCheck = truthCheck && false;
            }
        }

        return truthCheck
    }

    let substr = "";
    let hold = "";

    for(let windowEnd=0; windowEnd<str.length; windowEnd++){
        substr = substr + str[windowEnd];

        while(checker(substr, ptn)){
            hold = substr[0]
            substr = substr.substring(1)
        }
        if(!checker(substr, ptn)){
            substr = hold + substr
        }
    }

    console.log(substr)
}

smallest("aabdec", "abc");
smallest("abdabca", "abc");
smallest("adcad", "abc");
*/

/*
function smallest(str, pattern){
    let windowStart = 0;
    let minLength = str.length + 1;
    let matched = 0;
    let subStr = 0;
    let map = {};

    //store pattern chars in a hashmap
    for(let end=0; end<str.length; end++){
        let right = pattern[end]
        if(!(right in map)){
            map[right] = 0
        }
        map[right]++
    }

    //start matching chars
    for(let windowEnd=0; windowEnd<str.length; windowEnd++){
        let right = str[windowEnd];

        if(right in map){
            map[right]--
            if(map[right] >= 0){
                matched++
            }
        }

        while(matched === pattern.length){
            if(minLength > windowEnd-windowStart+1){
                minLength = windowEnd-windowStart+1;
                subStr = windowStart
            }
            let leftChar = str[windowStart];
            windowStart++

            if(leftChar in map){
                if(map[leftChar] === 0){ //if <0, means that char has a redundant instance
                    matched--
                }
                map[leftChar]++
            }
        }
    }

    if(minLength>str.length){
        console.log("")
    }else{
        console.log(str.substring(subStr, subStr+minLength))
    }
}

smallest("aabdec", "abc")
smallest("abdabca", "abc")
smallest("adcad", "abc")
*/

/*
function concat(str, list){
    let wordNum = list.length; //number of words in list
    let wordCount = list[0].length;  //number of letters in each word
    let width = wordNum*wordCount
    let result = []

    for(let windowEnd=0; windowEnd<str.length; windowEnd++){
        let subStr = "";

        for(let i=windowEnd; i<width+windowEnd; i++){
            let right = str[i];
            subStr = subStr + right;
            let truthCheck = true

            if(subStr.length === width){
                for(let v=0; v<list.length; v++){
                    if(subStr.includes(list[v])){
                        truthCheck = truthCheck && true
                    }else{
                        truthCheck = truthCheck && false
                    }
                }
                if(truthCheck){
                    result.push(windowEnd)
                }
            }
        }
    }

    console.log(result)
}

concat("catfoxcat", ["cat", "fox"])
concat("catcatfoxfox", ["cat", "fox"])
*/

/*function sum(arr, summation){
    let result = [];

    for(let windowStart=0; windowStart<arr.length-1; windowStart++){
        let left = arr[windowStart]

        for(let windowEnd=windowStart+1; windowEnd<arr.length; windowEnd++){
            let sum = left + arr[windowEnd];
            if(sum === summation){
                result.push(left);
                result.push(arr[windowEnd]);
                console.log(result)

                return
            }
        }
    }

    console.log(result)
}


sum([1,2,3,4,5,6,7], 10)
*/


/*function sum(arr, target){
    let result = [];
    let i = 0;
    let j = arr.length-1;
    let sum = arr[i] + arr[j];

    while(sum !== target){
        let start = arr[i]
        let end = arr[j]
        sum = start + end
        if(sum > target){
            j--
        }
        if(sum < target){
            i++
        }
    }

    result.push(i)
    result.push(j)

    console.log(result)
}

sum([2,5,9,11], 11)
*/

/*function summation(arr, sum){
    let map = new Map()

    for(let i=0; i<arr.length; i++){
        map.set(i, arr[i])
    }

    for(let j=0; j<arr.length; j++){
        for(let k=0; k<map.size; k++){
            if(arr[j]+map.get(k) === sum){
                console.log([j, k])
                return;
            }
        }
    }

    console.log([])
}

summation([2,5,9,11], 11)
*/

/*function duplicate(arr){
    for(let windowStart=0; windowStart<arr.length-1; windowStart++){
        let left = arr[windowStart]

        for(let windowEnd=windowStart+1; windowEnd<arr.length; windowEnd++){
            let right = arr[windowEnd];

            if(left === right){
                arr.splice(windowEnd, 1)
                windowEnd--
            }
        }
    }

    console.log(arr.length)
}
*/

/*
function duplicate(arr){
    let map = {}

    for(let windowEnd=0; windowEnd<arr.length; windowEnd++){
        if(!(arr[windowEnd] in map)){
            map[String(arr[windowEnd])] = 0;
        }
        map[String(arr[windowEnd])]++
    }

    console.log(Object.keys(map).length)
}

duplicate([2,3,3,3,6,9,9])
*/

//REMOVING REPEATED ELEMENTS: TWO POINTER APPROACH
/*function duplicate(arr){
    let nonDuplicate = 1;

    let i=1;
    while(i<arr.length){
        if(arr[nonDuplicate-1] !== arr[i]){
            arr[nonDuplicate] = arr[i]
            nonDuplicate++
        }
        i++
    }

    console.log(nonDuplicate)
}

duplicate([2,3,3,3,6,9,9])
duplicate([2,2,2,11])
*/







/*function instance(arr, key){
    let nonInstance = 0

    let i=0
    while(i<arr.length){
        if(arr[i] !== key){
            arr[nonInstance] = arr[i]
            nonInstance++
        }

        i++
    }

    console.log(nonInstance)
}

instance([3,2,3,6,3,10,9,3], 3)
instance([2,11,2,2,1], 2)
*/


/*
class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next
    }
}

const head = new Node(1);
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = head

/*
function check(listHead){
    let fast = listHead;
    let slow = listHead

    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next

        if(fast === slow){
            console.log("found a cycle")
            return;
        }
    }

    console.log("no cycle")
}

check(head)
*/
/*
function cycleLength(slow){
    let count = 0;
    let current = slow;
    while(true){
        current = current.next;
        count++
        if(current === slow){
            break;
        }
    }
    return count;
}


function starting(head){
    //get the length of the cycle
    let slow = head;
    let fast = head;
    let length = 0

    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
        if(fast === slow){
            length = cycleLength(slow)
            break;
        }
    }

    return meeting(head, length)
}

function meeting(head, length){
    //move one pointer length times ahead, then move both pointers once ahead
    let pointer1 = head;
    let pointer2 = head;

    while(length>0){
        pointer1 = pointer1.next
        length--
    }

    //meeting point gives the cycle start
    while(pointer1 !== pointer2){
        slow = slow.next;
        fast = fast.next;
    }

    console.log(pointer2.data)
}

starting(head)
*/

/*
function happy(num){
    let number  = num
    let map = {}

    while(true){
        if(!(number in map)){
            map[number] = 0
        }
        map[number]++

        number = sumOfSquares(number)

        if(number === 1){
            console.log(`${num} is a happy number`)
            return;
        }
        if(number in map){
            console.log(`${num} is not a happy number`)
            return;
        }
    }
}

function sumOfSquares(val){
    val = String(val)
    let sum = 0
    for(let i=0; i<val.length; i++){
        sum = sum + (Math.pow( Number(val[i]), 2 ))
    }
    return sum
}

happy(23)
happy(12)
*/


//USE A LINKED LIST'S FAST AND SLOW POINTERS APPROACH
/*
class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

function happy(num){
    let head = new Node(num)

    let current = head
    while(true){
        current.next = sumOfSquares(current.data) //returns a new node
        current = current.next

        let fast = head;
        let slow = head;

        //A CYCLE EXISTS
        //get cycle length
        let cycleLength = getCycleLength(head);

        //TO GET CYCLE START
        //move fast pointer cycleLength steps forward
        while(cycleLength>0){
            fast = fast.next
            cycleLength--
        }

        //rhen, move fast and slow pointer one step at a time
        if(cycleLength !== -1){
            while(true){
                slow = slow.next
                fast = fast.next
                if(slow === fast){
                    slow.data === 1 ? console.log(`${num} is a happy number`) : console.log(`${num} is not a happy number`)
                    return
                }
            }
        }
    }
}

function sumOfSquares(val){
    val = String(val)
    let total = 0

    for(let i=0; i<val.length; i++){
        total = total + Math.pow(Number(val[i]), 2)
    }
    return new Node(total)
}

function getCycleLength(head){
    let fast = head;
    let slow = head;

    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next

        if(fast === slow){
            let count = 1
            let current = slow.next
            while(current !== slow){
                count++
                current = current.next
            }
            return count
        }
    }

    return -1
}


happy(23)
*/

/*function happy(num){
    let slow = num
    let fast = num

    while(true){
        slow = sumOfSquares(slow)
        fast = sumOfSquares(sumOfSquares(fast))

        if(slow === fast){
            break;
        }
    }
    console.log(slow === 1)
}

function sumOfSquares(val){
    val = String(val)
    let total = 0

    for(let i=0; i<val.length; i++){
        total = total + Math.pow(Number(val[i]), 2)
    }

    return total
}

happy(12)
happy(23)*/

/*
class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next
    }
}

const head = new Node(1);
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

function middle(head){
    let slow = head
    let fast  = head

    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }

    console.log(slow)
}

middle(head)
*/

//foo(); // 1

//var foo;

/*function foo() {
 console.log( 1 );
}

foo = function() {
 console.log( 2 );
};

foo()*/
/*
if(true){
    function run(){
        console.log(4)
    }
}
run()
*/

/*function foo() {
    var a = 2;

    function bar() {
      console.log( a );
    }

    return bar;
}
var a = 9


var baz = foo();
var nun = baz
baz();
nun()*/

/*
class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next
    }
}


const head = new Node(1);
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(6)
head.next.next.next.next.next = new Node(4)
head.next.next.next.next.next.next = new Node(5)
head.next.next.next.next.next.next.next = new Node(4)
head.next.next.next.next.next.next.next.next = new Node(3)
head.next.next.next.next.next.next.next.next.next = new Node(2)
head.next.next.next.next.next.next.next.next.next.next = new Node(1)




function palindrome(head){
    let slow = head
    let fast = head
    let current = head

    //move slow to middle of linked list
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }

    slow.next = reverse(slow.next) //other half reversed

    while(slow.next !== null && slow.next.next !== null){
        if(current.data !== slow.next.data){
            console.log("not palindrome")
            return
        }
        current = current.next
        slow.next = slow.next.next
    }

    console.log("palindrome")
}

function reverse(head){
    let prev = null

    while(head !== null){
        next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
}

palindrome(head)
*/

//implementing a doubly linked list

/*
class Node{
    constructor(data, prev=null, next=null){
        this.data = data
        this.prev = prev
        this.next = next
    }
}


class LinkedList{
    constructor(){
        this.size = 0;
        this.head = null
    }

    addNode(data){
        if(!this.head){
            this.head = new Node(data)
            console.log(this.head)
            return
        }
        if(this.head && !this.head.next){
            this.head.next = new Node(data)
            console.log(this.head)
            return
        }
        let current = this.head
        while(current){
            if(!current.next){
                current.next = new Node(data, current)
                console.log(this.head)
                return
            }
            current = current.next
        }
    }

    printData(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}

let list = new LinkedList()
list.addNode(50)
list.addNode(100)
list.addNode(200)
list.addNode(300)
list.addNode(400)
list.printData()
*/


//JAVASCRIPT HASH TABLE

/*
function hashTable(){
    this.record = []

    this.hashFunction = (key, val)=>{
        let count = 0
        for(let i=0; i<key.length; i++){
            count++
        }

        if(this.record[count]){
            this.record[count].push(val)
            return
        }
        this.record[count] = [val]
    }

    this.showRecord = ()=>{
        console.log(this.record)
    }
}

let hash = new hashTable()
hash.hashFunction("bar", 10)
hash.hashFunction("mo", 20)
hash.hashFunction("vikki", 30)
hash.hashFunction("anit", 40)
hash.hashFunction("bart", 100)
hash.hashFunction("yu", 200)
hash.hashFunction("vik", 300)

hash.showRecord()*/

/*
function palindrome(head){
    let fast = head
    let slow = head

    //move slow pointer to middle
    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
    }

    let halfReversed = reverse(slow)
    console.log(halfReversed)
    console.log(head)
    let holdHalfReversed = halfReversed

    while(head !== null && halfReversed !== null){
        if(head.value !== halfReversed.value){
            break
        }

        head = head.next
        halfReversed = halfReversed.next
    }

    reverse(holdHalfReversed)
    console.log(head)

    if(head === null || halfReversed === null){
        console.log("palindrome")
        return
    }

    console.log("not palindrome")
}

function reverse(head){
    let prev = null
    while(head !== null){
        next = head.next
        head.next = prev
        prev = head
        head = next
    }

    return prev
}*/
/*
class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next
    }
}


const head = new Node(1);
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)



function reverse(head){
    let curr = head
    while(curr){
        console.log(curr.data)
        curr = curr.next
    }
    let prev = null
    while(head !== null){
        next = head.next
        head.next = prev
        prev = head
        head = next
    }

    let current = prev
    while(current){
        console.log(current.data)
        current = current.next
    }
}

reverse(head)
*/

/*
class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next
    }
}


const head = new Node(1);
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)


function rearrange(head){
    let slow = head
    let fast = head


    //move slow pointer to start of second half
    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
    }


    let reversedSecondHalf = reverse(slow)
}

rearrange(head)

function reverse(head){
    let prev = null
    while(head !== null){
        next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
}

/*
let obj1 = {
    name: "ade",
    age: 3
}

const obj2 = obj1
obj1 = {
    type: "male"
}

console.log(obj2)
console.log(obj1)*/

/*class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next
    }
}


const head = new Node(2);
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(2)
head.next.next.next.next.next = new Node(2)

function palindrome(head){
    let slow = head
    let fast = head

    //move slow to middle
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }

    reversed = reverse(slow)
    saveReversed = reversed

    while(head !== null && reversed !== null){
        if(head.value !== reversed.value){
            break;
        }

        head = head.next
        reversed = reversed.next
    }

    reverse(saveReversed)

    if(head === null || reversed === null){
        return true
    }

    return false
}

function reverse(head){
    let prev = null

    while(head !== null){
        next = head.next
        head.next = prev
        prev = head
        head = next
    }

    return prev
}

console.log(palindrome(head))
*/


/*
class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next
    }
}


const head = new Node(2);
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)
head.next.next.next.next.next = new Node(12)

function reverse(head){
    let prev = null

    while(head !== null){
        let next = head.next
        head.next = prev
        prev = head
        head = next
    }

    return prev
}

function rearrange(head){
    let slow = head
    let fast = head

    //move slow to middle of list
    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
    }

    //reverse second half
    let headSecondHalf = reverse(slow)
    let headFirstHalf = head

    while(headFirstHalf !== null && headSecondHalf !== null){
        let temp = headFirstHalf.next
        headFirstHalf.next = headSecondHalf
        headFirstHalf = temp

        temp = headSecondHalf.next
        headSecondHalf.next = headFirstHalf
        headSecondHalf = temp
    }

    if(headFirstHalf !== null){
        headFirstHalf.next = null
    }

    //print list
    let current = head
    while(current){
        console.log(current.data)

        current = current.next
    }
}

rearrange(head)*/

//IMPLEMENT A BINARY SEARCH IN JAVASCRIPT
/*
function binarySearch(arr, val){
    let start = 0;
    let end = arr.length-1;

    if((val === arr[start]) || (val === arr[arr.length-1])){
        console.log(true)
        return
    }

    while((end-start)>1){
        let index = Math.floor((start+end)/2)
        if(val === arr[index]){
            console.log(true)
            return
        }
        if(val > arr[index]){
            start = index
        }
        if(val < arr[index]){
            end = index
        }
    }

    console.log(false)
}

binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 14)*/


/*function cycle(arr){
    let windowEnd = 0

    while(windowEnd<arr.length){
        let pointer = arr[windowEnd]

        let count = pointer
        let steps = 0
        while(count > 0){
            pointer = arr[windowEnd+1]
            steps++
            count--
        }

        windowEnd += steps
    }
}*/

/*
function cycle(arr){
    for(let i=0; i<arr.length; i++){
        let isForward = arr[i] >= 0

        let slow = i
        let fast = i


        while(true){
            slow = nextIndex(arr, isForward, slow)
            fast = nextIndex(arr, isForward, fast)

            if(fast !== -1){
                fast = nextIndex(arr, isForward, fast)
            }

            if(slow === -1 || fast === -1 || slow===fast){
                break
            }
        }

        if(slow !== -1 && slow===fast){
            return true
        }
    }

    return false
}

function nextIndex(arr, isForward, currentIndex){
    let direction = arr[currentIndex] >= 0

    if(direction !== isForward){
        return -1   //can't find no cycle because direction is about to be changed
    }

    //case where all things are cool
    let next = (currentIndex + arr[currentIndex])%arr.length
    if(next<0){
        next += arr.length
    }

    if(next===currentIndex){
        next = -1
    }

    return next
}

console.log(cycle([1,2,-1,2,2]))
console.log(cycle([2,2,-1,2]))
console.log(cycle([2,1,-1,-2]))
*/

/*
class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next
    }
}


const head = new Node(2);
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)
head.next.next.next.next.next = new Node(12)
head.next.next.next.next.next.next = new Node(14)


function reverseLinkedList(head){
    let prev = null
    while(head !== null){
        let next = head.next
        head.next = prev
        prev = head
        head = next
    }

    return prev
}
/*
const reversed = reverseLinkedList(head)

let current = reversed
while(current){
    console.log(current.data)

    current = current.next
}*/

/*
function breakReverseAndShuffle(head){
    let slow = head
    let fast = head

    //move alow to middle
    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
    }

    slowReversed = reverseLinkedList(slow)

    let firstHalfHead = head
    let secondHalfHead = slowReversed

    //shuffling algorithm
    while(firstHalfHead !== null && secondHalfHead !== null){
        let temp = firstHalfHead.next
        firstHalfHead.next = secondHalfHead
        firstHalfHead = temp

        temp = secondHalfHead.next
        secondHalfHead.next = firstHalfHead
        secondHalfHead = temp
    }


    let current = head
    while(current){
        console.log(current.data)

        current = current.next
    }
}

breakReverseAndShuffle(head)*/

/*const arr = [1,5,6,4]

console.log(arr.sort((a,b)=>{
    return a-b
}))*/

/*
class Interval{
    constructor(start, end){
        this.start = start
        this.end = end
    }
    printInterval(){
        process.stdout.write(`[${this.start}, ${this.end}] `)
    }
}

function mergeIntervals(intervals){
    if(intervals.length < 2){
        return intervals
    }

    //sort intervals on the start time
    intervals.sort(
        function(a,b){
            return a.start - b.start
        }
    )

    const mergedIntervals = []
    let start = intervals[0].start
    let end = intervals[0].end

    for(let i=1; i<intervals.length; i++){
        let intervalStart = intervals[i].start

        if(intervalStart <= end){
            //overlap
            end = Math.max(end, intervals[i].end)
        }else{
            //no overlap
            mergedIntervals.push(new Interval(start, end))
            start = intervals[i].start
            end = intervals[i].end
        }
    }

    //push in the last interval
    mergedIntervals.push(new Interval(start, end))
    return mergedIntervals
}

const result = mergeIntervals([new Interval(6,7), new Interval(2,4), new Interval(5,9)])
for(let j=0; j<result.length; j++){
    result[j].printInterval()
}
console.log()*/

/*process.stdout.write("Barnabas ")
process.stdout.write("Babatunde")
console.log()
process.stdout.write("Bar")
console.log()*/
/*
for(let i=0; i<10; i++){
    setTimeout(function timeCount(){
        console.log(i)
    })
}
*/

// function user(){
//     //private data
//     var username;
//     var password;

//     function setUsername(newUsername){
//         username = newUsername;
//         console.log("username created")
//     }

//     function setPassword(newPassword){
//         password = newPassword;
//         console.log("password created")
//     }

//     function showDetails(){
//         console.log(`Username: ${username} Password: ${password}`);
//     }

//     //API
//     return {
//         setUsername,
//         setPassword,
//         showDetails
//     };
// }


// var john = user();

// john.setUsername("JohnDoe")
// john.setPassword("john123")
// john.showDetails()

// for(var i=0; i<10; i++){
//     setTimeout(function timeCount(){
//         console.log(i);
//     }, 2000);
// }

/*
function user(){
    //private data
    var username;
    var password;

    //public
    function setUsername(newUsername){
        username = newUsername;
        console.log("username created")
    }

    function setPassword(newPassword){
        password = newPassword;
        console.log("password created")
    }

    function showDetails(){
        console.log(`Username: ${username} Password: ${password}`);
    }

    //API
    return {
        setUsername,
        setPassword,
        showDetails
    };
}


var john = user();

john.setUsername("JohnDoe");
john.setPassword("john123");
john.showDetails();
*/
/*
class Interval{
    constructor(start, end){
        this.start = start
        this.end = end
    }
    printInterval(){
        process.stdout.write(`[${this.start}, ${this.end}] `)
    }
}

function insert(arr, interval){
    let start = interval.start

    if(start < arr[0].start){
        arr.unshift(interval)
    }
    if(start > arr[arr.length-1].start){
        arr.push(interval)
    }

    if(!(start < arr[0].start) && !(start > arr[arr.length-1].start)){
        for(let i=0; i<arr.length; i++){
            if(start >= arr[i].start){ //insert interval
                let temp = arr.splice(i+1)
                arr = [...arr, interval, ...temp]
                break
            }
        }
    }

    //merge
    let begin = arr[0].start
    let stop = arr[0].end
    let merged = []

    for(let i=1; i<arr.length; i++){
        if(arr[i].start <= stop){
            stop = Math.max(stop, arr[i].end)
        }else{
            merged.push(new Interval(begin, stop))
            begin = arr[i].start
            stop = arr[i].end
        }
    }

    //merge the last
    merged.push(new Interval(begin, stop))
    return merged
}

const result = insert([new Interval(2,3), new Interval(5,7)], new Interval(1,4))
for(let j=0; j<result.length; j++){
    result[j].printInterval()
}
console.log()






/*
let arr = [1,2,3,4,5,6,7,8]
let temp = arr.splice(3)
console.log(arr)
console.log(temp)
arr = [...arr, 100, ...temp]
console.log(arr)
*/
/*

class Interval{
    constructor(start, end){
        this.start = start
        this.end = end
    }
    printInterval(){
        process.stdout.write(`[${this.start}, ${this.end}] `)
    }
}

function overlap(arrOne, arrTwo){
    let newArr = [...arrOne, ...arrTwo];
    let result = []

    newArr.sort(
        (a,b)=>{
            return a.start - b.start
        }
    )
    //newArray sorted on start time

    let start = newArr[0].start
    let end = newArr[0].end

    for(let i=1; i<newArr.length; i++){
        if(newArr[i].start <= end){
            //overlap
            result.push(new Interval(Math.max(start, newArr[i].start), Math.min(end, newArr[i].end)))
            end = Math.min(end, newArr[i].end)
            start = Math.max(start, newArr[i].start)
        }else{
            //no overlap
            start = newArr[i].start
            end = newArr[i].end
        }
    }

    result.push(new Interval(start, end))
    return result
}

const result1 = overlap([new Interval(1,3), new Interval(5,6), new Interval(7,9)], [new Interval(2,3), new Interval(5,7)])
for(let j=0; j<result1.length; j++){
    result1[j].printInterval()
}
console.log()

const result2 = overlap([new Interval(1,3), new Interval(5,7), new Interval(9,12)], [new Interval(5,10)])
for(let j=0; j<result2.length; j++){
    result2[j].printInterval()
}
console.log()
*/

/*
class Interval{
    constructor(start, end){
        this.start = start
        this.end = end
    }
    printInterval(){
        process.stdout.write(`[${this.start}, ${this.end}] `)
    }
}

function overlapLists(firstInterval, secInterval){
    let i=0  //track first interval
    let j=0  //track second interval

    let result = []

    while(i<firstInterval.length && j<secInterval.length){
        let firstInSec = firstInterval[i].start >= secInterval[j].start && firstInterval[i].start <= secInterval[j].end;
        let secInFirst = secInterval[j].start >= firstInterval[i].start && secInterval[j].start <= firstInterval[i].end

        if(firstInSec || secInFirst){
            //there is overlap
            result.push(new Interval(Math.max(firstInterval[i].start, secInterval[j].start), Math.min(firstInterval[i].end, secInterval[j].end)));
        }

        if(firstInterval[i].end < secInterval[j].end){
            i++
        }else{
            j++
        }
    }

    return result
}

const result1 = overlapLists([new Interval(1,3), new Interval(5,6), new Interval(7,9)], [new Interval(2,3), new Interval(5,7)])
//console.log(result1)
for(let j=0; j<result1.length; j++){
    result1[j].printInterval()
}
console.log()

const result2 = overlapLists([new Interval(1,3), new Interval(5,7), new Interval(9,12)], [new Interval(5,10)])
//console.log(result2)
for(let j=0; j<result2.length; j++){
    result2[j].printInterval()
}
console.log()
*/
/*
class Interval{
    constructor(start, end){
        this.start = start
        this.end = end
    }
    printInterval(){
        process.stdout.write(`[${this.start}, ${this.end}] `)
    }
}

function appointment(arr){

    //sort on start time
    arr.sort(
        (a,b)=>{
            return a.start-b.start
        }
    )

    let start = arr[0].start
    let end = arr[0].end
    //let merged = []

    for(let i=1; i<arr.length; i++){
        let isOverlap = (start>arr[i].start && start<arr[i].end) || (arr[i].start>start && arr[i].start<end)

        if(isOverlap){
            return false
        }

        start = arr[i].start

        end = Math.max(end, arr[i].end)
    }

    return true
}

console.log(appointment([new Interval(4,5), new Interval(2,3), new Interval(3,6)]))
console.log(appointment([new Interval(1,4), new Interval(2,5), new Interval(7,9)]))
console.log(appointment([new Interval(6,7), new Interval(2,4), new Interval(8,12)]))*/
/*

class Interval{
    constructor(start, end){
        this.start = start
        this.end = end
    }
    printInterval(){
        process.stdout.write(`[${this.start}, ${this.end}] `)
    }
}

function rooms(arr){
    //sort intervals on start time
    arr.sort(
        (a,b)=>{
            return a.start - b.start
        }
    )

    let noOfRooms = 1

    let start = arr[0].start
    let end = arr[0].end

    //iterate through
    for(let i=1; i<arr.length; i++){

        let isOverlap = (arr[i].start > start && arr[i].start < end) || (start > arr[i].start && start < arr[i].end)

        //if there is overlap
        if(isOverlap){
            noOfRooms++
            end = Math.max(end, arr[i].end)
        }else{
            start = arr[i].start
            end = arr[i].end
        }
    }

    return noOfRooms
}

console.log(rooms([new Interval(1,4), new Interval(2,5), new Interval(7,9)]))
console.log(rooms([new Interval(6,7), new Interval(2,4), new Interval(8,2)]))
console.log(rooms([new Interval(1,4), new Interval(2,3), new Interval(3,6)]))
console.log(rooms([new Interval(4,5), new Interval(2,3), new Interval(2,4), new Interval(3,5)]))
*/
/*

const Heap = require('collections/heap');


function rooms(arr){

    //sort all intervals on the start time
    arr.sort(
        (a,b)=>{
            return a.start - b.start
        }
    )

    let minRooms = 0
    //min heap to store all the active meetings, sorting in descending order on the end time
    let minHeap = new Heap([], null, (a,b)=>b.end - a.end)

    for(let i=0; i<arr.length; i++){
        while(minHeap.length>0 && arr[i].start >= minHeap.peek().end){
            minHeap.pop()
        }

        minHeap.push(arr[i])

        minRooms = Math.max(minRooms, minHeap.length)
    }

    return minRooms
}

console.log(rooms([new Interval(4,5), new Interval(2,3), new Interval(2,4), new Interval(3,5)]))
*/

/*
class Interval{
    constructor(start, end, load){
        this.start = start
        this.end = end
        this.load = load
    }
}

function maxLoad(arr){
    //sort on start time
    arr.sort(
        (a,b)=>{
            return a.start - b.start
            //arr is sorted
        }
    )

    let start  = arr[0].start
    let end  = arr[0].end
    let load = arr[0].load
    let maxTime = load

    for(let i=1; i<arr.length; i++){
        let isOverlap = (start>arr[i].start && start<arr[i].end) || (arr[i].start>start && arr[i].start<end)

        if(isOverlap){
            let timeSum = arr[i].load + load
            maxTime = Math.max(maxTime, timeSum)
        }else{
            maxTime = Math.max(maxTime, arr[i].load)
            end = Math.max(end, arr[i].end)
        }
    }
}*/

/*function numberSum(arr, sum){
    let count = 1

    for(let i=0; i<arr.length; i++){
        let first = arr[i]

        for(let j=count; j<arr.length; j++){
            let second = arr[j]
            if(first+second === sum){
                return true
            }
        }

        count++
    }

    return false
}
console.log(numberSum([3,5,-4,8,11,1,-1,6], 10))
console.log(numberSum([3,5,-4,8,11,1,-1,6], 20))*/
/*
function numberSum(arr, sum){
    let map = new Map()

    //store all elements in a map
    for(let i=0; i<arr.length; i++){
        map.set(arr[i], i)
    }

    for(let j=0; j<arr.length; j++){
        let req = sum-arr[j]
        if(map.has(req)){
            return true
        }
    }

    return false
}

console.log(numberSum([3,5,-4,8,11,1,-1,6], 10))
console.log(numberSum([3,5,-4,8,11,1,-1,6], 20))*/

/*
function numberSum(arr, sum){

    //sort array in ascending order
    arr.sort(
        (a,b)=>{
            return a-b
        }
    )

    let i=0
    let j=arr.length-1


    while(i !== j){
        let first = arr[i]
        let second = arr[j]

        if(first+second > sum){
            j--
        }else if(first+second < sum){
            i++
        }else{
            return true
        }
    }

    return false
}
console.log(numberSum([3,5,-4,8,11,1,-1,6], 10))
console.log(numberSum([3,5,-4,8,11,1,-1,6], 20))
*/

/*
class Interval{
    constructor(start, end){
        this.start = start
        this.end = end
    }
}

function freeTime(arr){
    let list = []


    //harvest all intervals
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            list.push(arr[i][j])
        }
    }

    //sort on start time
    list.sort(
        (a,b)=>{
            return a.start - b.start
        }
    )

    let result = []

    //check for non-overlapping intervals
    let start = list[0].start
    let end = list[0].end
    for(let k=1; k<list.length; k++){
        let isOverlap = (start > list[k].start && start < list[k].end) || (list[k].start > start && list[k].start < end);

        if(!isOverlap){ //no overlap
            result.push([Math.min(end, list[k].end), Math.max(start, list[k].start)])
        }
    }

    return result
}

console.log(freeTime([[new Interval(1,3), new Interval(5,6)], [new Interval(2,3), new Interval(6,8)]]))
*/

/*function subSequence(arr1, arr2){
    let map = new Map()

    //store sequence in a hash map
    for(let i=0; i<arr1.length; i++){
        map.set(arr1[i], i)
    }

    //check if subsequence is in hash map
    for(let j=0; j<arr2.length; j++){
        if(!map.has(arr2[j])){
            return false
        }
    }

    //subsequence is in hash map
    //now, check if it is in order
    for(let k=0; k<arr2.length-1; k++){
        if(!(map.get(arr2[k+1]) > map.get(arr2[k]))){
            return false
        }
    }

    return true
}*/
/*
function subSequence(arr1, arr2){

    let i=0;
    let j=0;

    while(i<arr2.length){
        let pointer1 = arr2[i]

        let found = false
        for(let k=j; k<arr1.length; k++){
            if(arr1[k] === pointer1){
                found = true
                break;
            }
            j++
        }
        if(!found){
            return false
        }
        i++
    }

    return true
}

console.log(subSequence([5,1,22,25,6,-1,8,10],[5,22,25,8,10]))*/

// function sort(arr){
//     arr.sort(   //takes space
//         (a,b)=>{
//             return a-b
//         }
//     )

//     console.log(arr)
// }

// sort([3,1,5,4,2])

// let a = 1
// let b = 2
// let c = 3
// let d = 4
// let e = 5

// let arr = [a,b,c,d,e]
// console.log(arr)
// [arr[0], arr[1]] = [arr[1], arr[0]]
// console.log(arr)

// const a = ['a', 'b', 'c', 'e', 'd']

// [a[3], a[4]] = [a[4], a[3]]

// console.log(a)

// function cyclicSort(arr){
//     let i=0;

//     while(i<arr.length){
//         const j = arr[i]-1

//         if(arr[i] !== arr[j]){
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//         }else{
//             i++
//         }
//     }

//     console.log(arr)
// }

// cyclicSort([2,6,4,3,1,5])

// var arr = [1,2,3,4,5,6]
// [arr[1], arr[4]] = [arr[4], arr[1]] //compiler activity

// function go(arr){
//     [arr[1], arr[4]] = [arr[4], arr[1]]
//     console.log(arr)
// }

// go([1,2,3,4,5,6])
//console.log(arr)

// function distinct(arr){
//     let i=0

//    //sort
//     while(i<arr.length){
//         const j = arr[i] //number is same as index: since array starts from 0

//         if(arr[j] !== arr[i]){
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//         }else{
//             i++
//         }
//     }

//     console.log(arr)

//     //search for undefined's index
//     for(let j=0; j<arr.length; j++){
//         if(arr[j] === undefined){
//             console.log(j)
//             return
//         }
//     }

//     return "no missing number"
// }
//distinct([8,3,5,2,4,6,0,1])


// function closest(tree, target){ 
//     return closestHelper(tree, target, Infinity) //tree is the current node
// }

// function closestHelper(tree, target, closest){
//     if(!tree){
//         return closest
//     }

//     if(Math.abs(target-closest) > Math.abs(target-tree.value)){
//         closest = tree.value
//     }

//     if(target > tree.value){
//         return closestHelper(tree.right, target, closest)
//     }
//     else if(target < tree.value){
//         return closestHelper(tree.left, target, closest)
//     }
//     else{
//         return closest
//     }
// }

// function missing(arr){
//     let i=0

//     while(i<arr.length){
//         const j = arr[i]-1

//         if(arr[i] !== arr[j]){
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//             if(arr[i]===arr[j]){
//                 arr[j] = undefined
//             }
//         }else{
//             i++
//         }
//     }

//     return arr
// }

// console.log(missing([2,3,1,8,2,3,5,1]))

// function distinct(arr){
//     let i=0

//    //sort
//     while(i<arr.length){
//         const j = arr[i] //number is same as index: since array starts from 0

//         if(arr[j] !== arr[i]){
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//         }else{
//             i++
//         }
//     }

//     console.log(arr)

//     // //search for undefined's index
//     for(let j=0; j<arr.length; j++){
//         if(arr[j] !== j){
//             console.log(j)
//             return
//         }
//     }

//     // return "no missing number"
// }
// distinct([8,3,5,2,4,6,0,1])

// function missingNumbers(arr){
//     //replace all duplicates with undefined
//     let newArr = [] //will hold distinct numbers
//     let map = new Map()  //a look up record

//     for(let i=0; i<arr.length; i++){
//         if(!map.has(arr[i])){
//             map.set(arr[i], i)
//             newArr.push(arr[i])
//         }else{
//             newArr.push(undefined)
//         }
//     }

//     //sort using cyclic sort
//     let k = 0
//     while(k<newArr.length){
//         const m = newArr[k]-1

//         if(newArr[k] !== newArr[m]){
//             [newArr[m], newArr[k]] = [newArr[k], newArr[m]]  //swap
//         }else{
//             k++
//         }
//     }

//     //return missing numbers
//     for(let p=0; p<newArr.length; p++){
//         if(newArr[p] === undefined){
//             console.log(p+1)
//         }
//     }
// }

// missingNumbers([2,3,2,1])

// function duplicate(arr){
//     let i = 0;
//     let duplicates = {}

//     while(i<arr.length){
//         const j = arr[i]-1

//         if(arr[j] !== arr[i]){
//             [arr[j], arr[i]] = [arr[i], arr[j]] //swap
//         }else{
//             i++
//             //check history
//             for(let k=0; k<i; k++){
//                 if(arr[k] === arr[i]){  //duplicate found
//                     if(!duplicates.hasOwnProperty(arr[k])){
//                         duplicates[arr[k]] = arr[k]
//                     }
//                 }
//             }
//         }
//     }

//     for(let v in duplicates){
//         console.log(v)
//     }

//     //console.log(duplicates)
// }

// duplicate([5,4,7,2,3,5,3])

// function corruptPairs(arr){
//     let i=0
//     let result = []

//     while(i<arr.length){
//         const j = arr[i]-1

//         if(arr[j] !== arr[i]){
//             //swap
//             [arr[j], arr[i]] = [arr[i], arr[j]]
//         }else{
//             i++
//         }
//     }

//     for(let k=1; k<arr.length; k++){
//         for(let p=0; p<k; p++){
//             if(arr[p] === arr[k]){
//                 result.push(arr[k])
//                 result.push(k+1)
//             }
//         }
//     }

//     console.log(result)

// }

// corruptPairs([3,1,2,3,6,4])

//I LOVE ALGORITHMS...I LOVE CYCLIC SORT

// function smallestMissing(arr, k){
//     let i=0;

//     while(i<arr.length){
//         let j;

//         if(arr.includes(0)){
//             j=arr[i]
//         }else{
//             j=arr[i]-1
//         }


//         if(arr[j] !== arr[i]){
//             [arr[i], arr[j]] = [arr[j], arr[i]] //swap
//         }else{
//             i++
//         }
//     }

   

//     let result = []
//     let count = 0

//     for(let p=0; p<arr.length; p++){
//         if(arr[p] !== p+1 && count<k){
//             if(arr.includes(0)){
//                 result.push(p)
//             }else{
//                 result.push(p+1)
//             }
//             count++
//         }
//     }

//     //console.log(result)

//     let a = 1

//     while(result.length < k){
//         let addition = result[result.length-1]+a
//         if(!arr.includes(addition)){
//             result.push(addition)
//             a = 1
//         }else{
//             a++
//         }
//     }

//     console.log(result)
// }

// smallestMissing([3,-1,4,5,5], 3)
// smallestMissing([2,3,4,6], 2)
// smallestMissing([-2,-3,4], 2)

// function cyclic(arr){
//     let i=0

//     while(i<arr.length){
//         const j = arr[i]-1

//         if(arr[i] !== arr[j]){
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//         }else{
//             i++
//         }
//     }

//     console.log(arr)
// }

// cyclic([2,1,3,6,5])

//Linked list
// class Node{
//     constructor(data, next=null){
//         this.data = data;
//         this.next = next;
//     }
// }

// const head = new Node(2)
// head.next = new Node(4)
// head.next.next = new Node(6)
// head.next.next.next = new Node(8)
// head.next.next.next.next = new Node(10)

// console.log(head)

// let strt = head
// while(strt){
//     console.log(strt.data)
//     strt = strt.next
// }   

// function reversed(head){
//     let prev = null;
//     let current = head;

//     while(current){
//         let next = current.next
//         current.next = prev
//         prev = current
//         current = next
//     }

//     let start = prev
//     while(start){
//         console.log(start.data)
//         start = start.next
//     }
// }

// reversed(head)


//CYCLIC SORT REVISED...1 to n
// function sort(arr){

//     let i = 0

//     while(i<arr.length){
//         const j = arr[i]

//         if(arr[j] !== arr[i]){
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         }else{
//             i++
//         }
//     }

//     console.log(arr)
// }

// sort([3,4,1,2,0,6,5])

//REVERSAL OF LINKED LIST WITH O(1) SPACE
// function reverse(head){
//     let prev = null
//     let current  = head

//     while(current){
//         let next = current.next
//         current.next = prev
//         prev = current
//         current = next
//     }

//     let start = prev

//     while(start){
//         console.log(start.data)
//         start = start.next
//     }
// }

// class Node{
//         constructor(data, next=null){
//             this.data = data;
//             this.next = next;
//         }
//     }

// const head = new Node(2)
// head.next = new Node(4)
// head.next.next = new Node(6)
// head.next.next.next = new Node(8)
// head.next.next.next.next = new Node(10)


// reverse(head)


// class Node{
//     constructor(data, next=null){
//         this.data = data;
//         this.next = next;
//     }

//     printData(){
//         let current = this
//         while(current){
//             console.log(current.data)
//             current = current.next
//         }
//     }
// }
    
// const head = new Node(1)
// head.next = new Node(2)
// head.next.next = new Node(3)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(5)
// head.next.next.next.next.next = new Node(6)
// head.next.next.next.next.next.next = new Node(7)
// head.next.next.next.next.next.next.next = new Node(8)

// function reverse(head, pos1, pos2){
//     if(pos1 === pos2){
//         return head
//     }

//     let i=0
//     let current = head
//     let previous = null

//     while(current && i<(pos1-1)){
//         previous = current
//         current = current.next
//         i++
//     } //current is now at position pos1

//     let current_holder = current
//     let previous_holder = previous
//     let next = null
//     let count = 0

//     while(current && count<(pos2-pos1+1)){
//         next = current.next
//         current.next = previous
//         previous = current
//         current = next
//         count++
//     } //in place reversal done from pos1 to pos2

//     if(current_holder){
//         previous_holder.next = previous
//     }else{
//         head = previous
//     }

//     current_holder.next = current

//     return head
// }

// const result = reverse(head, 2, 4)
// result.printData()

// function reverseK(head, k){
//     let current = head
//     let reversed = 0

//     function reverse(head){
//         let current = head
//         let previous = null
//         let next = null

//         for(let i=0; i<reversed; i++){
//             if(current){
//                 previous = current
//                 current = current.next
//             }
//         }

//         let count = 0;

//         while(current && count<k){
//             next = current.next
//             current.next = previous
//             previous = current
//             current = next
    
//             count++
//         }//first k elements now reversed

//         reversed = reversed + count
//         return previous
//     }

//     while(current){
//         current = reverse(current)
//     }

//     return current
// }

// const result = reverseK(head, 3)
// result.printData()
// class Node{
//     constructor(data, next=null){
//         this.data = data;
//         this.next = next;
//     }

//     printData(){
//         let current = this
//         while(current){
//             console.log(current.data)
//             current = current.next
//         }
//     }
// }
    
// const head = new Node(1)
// head.next = new Node(2)
// head.next.next = new Node(3)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(5)
// head.next.next.next.next.next = new Node(6)
// head.next.next.next.next.next.next = new Node(7)
// head.next.next.next.next.next.next.next = new Node(8)

// function reverseK(head, k){
//     if(k<= 1 || !head){
//         return head
//     }

//     let previous = null
//     let current = head

//     while(true){
//         let last_node_previous_list = previous
//         let last_node_of_sublist = current

//         let next = null
//         let i = 0

//         while(current && i<k){
//             next = current.next
//             current.next = previous
//             previous = current
//             current = next
//             i++
//         }

//         if(last_node_previous_list){
//             last_node_previous_list.next = previous
//         }else{
//             head = previous
//         }

//         last_node_of_sublist.next = current

//         if(!current){
//             break
//         }

//         previous = last_node_of_sublist
//     }

//     return head
// }

// const result = reverseK(head, 3)
// result.printData()

// class Node{
//         constructor(data, next=null){
//             this.data = data;
//             this.next = next;
//         }
    
//         printData(){
//             let current = this
//             while(current){
//                 console.log(current.data)
//                 current = current.next
//             }
//         }
//     }
        
//     const head = new Node(1)
//     head.next = new Node(2)
//     head.next.next = new Node(3)
//     head.next.next.next = new Node(4)
//     head.next.next.next.next = new Node(5)
//     head.next.next.next.next.next = new Node(6)
//     head.next.next.next.next.next.next = new Node(7)
//     head.next.next.next.next.next.next.next = new Node(8)


// function reverseSub(head, p, q){
//     let nodeBeforeSub = head
//     let workingPtr
//     let toBeExtracted
//     let count = 0

//     for(let i=0; i<(p-2); i++){
//         nodeBeforeSub = nodeBeforeSub.next
//         workingPtr = nodeBeforeSub.next
//     }

//     while(count < q-p){
//         toBeExtracted = workingPtr.next
//         workingPtr.next = toBeExtracted.next
//         toBeExtracted.next = nodeBeforeSub.next
//         nodeBeforeSub.next = toBeExtracted

//         count++
//     }

//     return head
// }

// const result = reverseSub(head, 3, 5)
// result.printData()

//CYCLIC SORT
// function sort(arr){
//     let i = 0

//     while(i<arr.length){
//         const j = arr[i]-1

//         if(arr[i] !== arr[j]){
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//         }else{
//             i++
//         }
//     }

//     console.log(arr)
// }

// sort([1,6,5,4,3,2])

class Node{
        constructor(data, next=null){
            this.data = data;
            this.next = next;
        }
    
        printData(){
            let current = this
            while(current){
                console.log(current.data)
                current = current.next
            }
        }
    }
        
    const head = new Node(1)
    head.next = new Node(2)
    head.next.next = new Node(3)
    head.next.next.next = new Node(4)
    head.next.next.next.next = new Node(5)
    head.next.next.next.next.next = new Node(6)
    head.next.next.next.next.next.next = new Node(7)
    head.next.next.next.next.next.next.next = new Node(8)

function reverseK(head, k){
    let workingPtr = head
    let storeToBeExtracted = head
    let toBeExtracted


    while(!toBeExtracted){
        toBeExtracted = workingPtr.next
        workingPtr.next = toBeExtracted.next
        toBeExtracted.next = storeToBeExtracted
        storeToBeExtracted = toBeExtracted
    }

    return storeToBeExtracted
}

const result = reverseK(head)
result.printData()