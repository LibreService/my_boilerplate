set -e

root=$PWD
n=`python -c 'import multiprocessing as mp; print(mp.cpu_count())'`
