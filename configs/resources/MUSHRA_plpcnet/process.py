import glob
import numpy as np
from scipy.io import wavfile

sr, sig = wavfile.read('configs/resources/MUSHRA_plpcnet/trial_1/652_256_prop.wav')
print(sig.shape)
fake()

for f in glob.glob('*/*.wav'):
    sr, sig = wavfile.read(f)
    print(sig.shape)


    # sig = np.vstack((sig, sig)).transpose()

    # amplitude = np.iinfo(np.int16).max
    # sig = amplitude * sig
    # # wavfile.write(f, sr, sig.astype(np.int16))
    # print(sig.shape)