import glob
import numpy as np
from scipy.io import wavfile

for f in glob.glob('*/*.wav'):
    sr, sig = wavfile.read(f)

    sig = np.vstack((sig, sig)).transpose()

    wavfile.write(f, sr, sig.astype(np.int16))
    print(sig.shape)