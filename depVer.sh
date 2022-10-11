#!/bin/bash
truffle migrate --f $1 --to $1 --network $2
truffle run verify $3 --network $2