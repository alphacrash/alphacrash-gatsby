---
title: 'Neural Networks: Introduction'
date: 2019-09-12 22:50:00
path: '/neural-networks-1'
---
<!--- Images --->
import i1 from "../images/a3i1.png"
import i2 from "../images/a3i2.png"
import i3 from "../images/a3i3.png"
import i4 from "../images/a3i4.png"
import i5 from "../images/a3i5.png"

Let's say we have a dataset with six houses. It provides us the size of the house and the price accordingly. So, we plot accordingly. 

<img src={i1} className="w-75" />

If you are familiar with linear regression, let's put a straight line in these data. We know prices cannot be negative, so we bend it to zero instead.

<img src={i2} className="w-75" />

This blue line acts like a function that predicts the price of a house when the size of the house is given.

Basically, it looks like this.

<img src={i3} className="w-75" />

Input goes to neuron. Neuron predicts the output.

A simple neural network.

## Let's make it a bit complicated.

Generally, price depends on factors like walkability, school quality, family size, etc. These factors can be deduced from input given. For example, based on zip code and wealth we can estimate the quality of school. 

Let's look at the image.

<img src={i4} className="w-75" />

The inputs are passed through neurons stack like above called hidden units. They will figure out by itself.

We just have to provide input and it will predict the output.

Neural network are remarkably good at figuring out functions that accurately map from x to y.

We can imagine neural networks as such.

<img src={i5} className="w-75" />